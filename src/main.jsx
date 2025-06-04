import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AuthProvider from './provider/AuthProvider'
import { Router, RouterProvider } from 'react-router'
import router from './Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
