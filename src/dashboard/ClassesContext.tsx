import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { createColorGradient, useUpdateTheme } from '../theme'
import { functions } from '../services/firebase'
import { useTheme } from '@emotion/react'
import { Theme } from 'stinodes-ui'
import { httpsCallable } from 'firebase/functions'

type Class = {
  color: string
  link: string
  name: string
  slug: string
  icon: string
}
type ClassesContextType = Class[]

const ClassesContext = createContext<ClassesContextType>([])

export const ClassesProvider = ({ children }: { children: ReactNode }) => {
  const [classes, setClasses] = useState<Class[]>([])

  const updateTheme = useUpdateTheme()

  useEffect(() => {
    const fetchClasses = async () => {
      // const { docs } = await getDocs(
      //   query(
      //     collection(firestore, 'classes') as CollectionReference<{
      //       color: string
      //     }>,
      //   ),
      // )
      // const classes = docs.reduce(
      //   (prev, v) => ({
      //     ...prev,
      //     [v.id]: v.data(),
      //   }),
      //   {} as ClassesContextType,
      // )

      const result = await httpsCallable<unknown, Class[]>(
        functions,
        'classes',
      )()

      updateTheme({
        colors: result.data.reduce(
          (prev, classResult) => ({
            ...prev,
            [classResult.slug]: createColorGradient(
              classResult.color,
            ).reverse(),
          }),
          {},
        ),
      })

      setClasses(result.data)
    }

    fetchClasses()
  }, [setClasses, updateTheme])

  return (
    <ClassesContext.Provider value={classes}>
      {children}
    </ClassesContext.Provider>
  )
}

export const useClasses = () => useContext(ClassesContext)
export const useClass = (className: string) =>
  useContext(ClassesContext).find(
    c => c.slug === className || c.name === className,
  )

export const useChangeClassColors = () => {
  const theme = useTheme() as Theme
  const updateTheme = useUpdateTheme()
  return (className: string) => {
    const colors = theme.colors[className]
    if (colors)
      updateTheme({
        colors: {
          primaries: colors,
          primary: colors[2],
        },
      })
  }
}
