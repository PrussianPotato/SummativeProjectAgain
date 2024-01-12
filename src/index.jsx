import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Showcase from './Showcase'
import About from './About'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Showcase",
    element: <Showcase />,
  },
  {
    path: "About",
    element: <About />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)