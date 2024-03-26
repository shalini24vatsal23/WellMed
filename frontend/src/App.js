// App.js
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Article from './pages/Article';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SignIn1 from './pages/SignIn1';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/article/:id',
      element: <Article />,
    },
    {
      path: '/SignIn1', 
      element: <SignIn1 />,
    },
  ]);
  
  
    return (
      <RouterProvider router={router}>
        <nav>
          {/* Add other navigation links here */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/article/1">Article 1</NavLink> 
          <NavLink to="/SignIn1">Sign In</NavLink>  
        </nav>
      </RouterProvider>
    );
  }

export default App;
