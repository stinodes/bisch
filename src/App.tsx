import { RouterProvider } from 'react-router-dom'
import { NavLayout } from './common/NavLayout'
import { ClassesProvider } from './dashboard/ClassesContext'
import { routes } from './routes'

function App() {
  return (
    <ClassesProvider>
      <NavLayout>
        <RouterProvider router={routes} />
      </NavLayout>
    </ClassesProvider>
  )
}

export default App
