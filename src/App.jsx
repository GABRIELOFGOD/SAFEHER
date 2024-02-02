import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Explicit from '../Pages/Explicit';
import Newsletters from '../Pages/Newsletters';
import Urls from '../Pages/Urls';
import Profile from '../Pages/Profile';
import { UserContextProvider } from '../utils/context';
import LoginAdmin from '../Pages/LoginAdmin';
import Register from '../Pages/Register';
import ReviewUrl from '../components/ReviewUrl';

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
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'url/:id',
        element: <ReviewUrl/>
      }
    ]
  },
  // {
  //   path: 'login',
  //   element: <LoginAdmin />
  // }
])

const App = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App