import { Children, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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


import ErrorElement from './components/ErrorElement'

import {loader as landingLoder} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct'
// import { loader as productsLoader } from './pages/Products';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
    refetchOnWindowFocus: false
  },
})
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
          loader: landingLoder(queryClient),
          errorElement: <ErrorElement />
        },
        {
          path: 'products',
          errorElement: <ErrorElement />,
          // loader: productsLoader(queryClient),
          element: <Products />
        },
         {
          path: 'products/:id',
          element: <SingleProduct />,
          loader: singleProductLoader(queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
  
}

export default App
