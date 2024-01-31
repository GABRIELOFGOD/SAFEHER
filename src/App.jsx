import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Explicit from '../Pages/Explicit';
import Newsletters from '../Pages/Newsletters';
import Urls from '../Pages/Urls';
import Profile from '../Pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'blogs',
        element: <Blog />
      },
      {
        path: 'explicit',
        element: <Explicit />
      },
      {
        path: 'newsletters',
        element: <Newsletters />
      },
      {
        path: 'urls',
        element: <Urls />
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App