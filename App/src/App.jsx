import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './layout/Root';
import Home from './pages/Home/components/Home.jsx'
import Products from './pages/Products/components/Products.jsx'
import About from './pages/About/components/About.jsx'
import Register from './pages/Register/components/Register.jsx'
import Login from './pages/Login/components/Login.jsx'
import NotFound from './pages/NotFound/components/NotFound.jsx'


 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <NotFound />,
        }, 

      ]
    }
  ]);
function App() {
 
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App


