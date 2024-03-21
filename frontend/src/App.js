// App.js
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Article from './pages/Article';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: `/article/:id`,
      element: <Article/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
