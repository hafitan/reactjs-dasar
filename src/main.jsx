import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RegisterPage from './pages/register.jsx'
import LoginPage from './pages/login.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error.jsx'
import ProductPage from './pages/products.jsx'
import DetailProductPage from './pages/detailProduct.jsx'
import ProfilePage from './pages/profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    // errorElement: <ErrorPage />
  },
  {
    path: '/counter',
    element: <App />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductPage />
  },
  {
    path: '/products/:id',
    element: <DetailProductPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
