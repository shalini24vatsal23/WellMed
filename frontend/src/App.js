// App.js
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Article from './pages/Article';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import SignIn1 from './pages/SignIn1';
import SignUpDoctor from './pages/SignUpDoctor';
import SignUpPatient from './pages/SignUpPatient';

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
      path: '/signup-patient',
      element: <SignUpPatient />,
    },
    {
      path: '/signup-doctor',
      element: <SignUpDoctor />,
    },
  ]);

  return (
    <RouterProvider router={router}>       
    </RouterProvider>
  );
}

export default App;