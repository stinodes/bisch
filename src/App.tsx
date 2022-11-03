import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { NavLayout } from './common/NavLayout'
import { ClassesProvider } from './dashboard/ClassesContext'
import { routes } from './routes'

function App() {
  return (
    <NavLayout>
      <AuthProvider>
        <ClassesProvider>
          <RouterProvider router={routes} />
        </ClassesProvider>
      </AuthProvider>
    </NavLayout>
  )
}

export default App
