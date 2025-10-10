import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorElement from './components/ErrorElement'

import {loader as landingLoder} from './pages/Landing'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoder,
          error: <ErrorElement />
        },
        {
          path: 'products',
          element: <Products />
        },
        {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
    
      },
      {
        path: 'orders',
        element: <Orders />,
       
      },
      ]
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return < RouterProvider router={router} />
  
}

export default App
