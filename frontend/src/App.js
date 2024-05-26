// App.js
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Article from './pages/Article';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import SignUpDoctor from './pages/SignUpDoctor';
import SignUpPatient from './pages/SignUpPatient';
import TwoButton from './pages/TwoButton';
import LoginPage from './pages/LoginPage';
import LoginPage1 from './pages/LoginPage1';
import SpecialitiesPage from './pages/SpecialitiesPage';
import Appoint from './pages/Appoint';
import DocProfile from './pages/DocProfile';

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
      path: '/TwoButton',
      element: <TwoButton />,
    },
    {
      path: '/LoginPage',
      element: <LoginPage />,
    },
    {
      path: '/SignUpDoctor',
      element: <SignUpDoctor />,
    },
    {
      path: '/LoginPage1',
      element: <LoginPage1 />,
    },
    {
      path: '/SignUpPatient',
      element: <SignUpPatient />,
    },
   {
    path: '/SpecialitiesPage',
    element: <SpecialitiesPage />,
   },
   {
    path: '/Appoint',
    element: <Appoint/>,
   },
   {
    path: '/DocProfile',
    element: <DocProfile/>,
   },
  
   
   
  ]);

  return (
    <RouterProvider router={router}>       
    </RouterProvider>
  );
}

export default App;