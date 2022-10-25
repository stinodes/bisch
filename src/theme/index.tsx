import { shade, tint } from 'polished'
import { mergeDeepRight } from 'ramda'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { convertToDark, createTheme, Theme, UIThemeProvider } from 'stinodes-ui'

type ThemeContextType = {
  theme: Theme
  updateTheme: (theme: Theme) => void
}

const darks = ['#2F2F37', '#26262C', '#1C1C21', '#131316', '#060607'].reverse()
export const defaultTheme = convertToDark(
  createTheme({
    fontFamily: 'Lato',
    colors: {
      darks,
    },
  }),
)

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  updateTheme: () => {},
})

export const createColorGradient = (color: string) => [
  shade(0.6, color),
  shade(0.3, color),
  color,
  tint(0.3, color),
  tint(0.6, color),
]

export const BischThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme)

  const updateTheme = useCallback(
    (newTheme: Partial<Theme>) =>
      setTheme(theme => mergeDeepRight(theme, newTheme)),
    [setTheme],
  )

  const value = useMemo(
    () => ({
      theme,
      updateTheme,
    }),
    [theme, updateTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      <UIThemeProvider theme={theme}>{children}</UIThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useUpdateTheme = () => {
  return useContext(ThemeContext).updateTheme
}
