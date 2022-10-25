import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './dashboard'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
])
