import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import { Dashboard } from './routes/dashboard/dashboard.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [{
    index: true,
    element: <Dashboard />
  }]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
