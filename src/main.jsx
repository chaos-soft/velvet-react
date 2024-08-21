import axios from 'axios'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'

import router from './components/router'

axios.defaults.baseURL = import.meta.env.VITE_API

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <StrictMode />
  </RouterProvider>
)
