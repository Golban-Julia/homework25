import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Users from './routes/Users';
import User from './routes/User';


import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement:<NotFound/>,
    children: [
      {
      path: "",
      element: <Home />,
      },
      {
      path: "users",
      element: <Users/>,
      },
      {
      path: "users/:userId",
      element: <User/>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ router} />);
