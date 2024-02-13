import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
import './app/styles/global.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
