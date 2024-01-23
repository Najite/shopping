import React from 'react';
import ReactDOM from 'react-dom/client';


// import react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx';
import './index.css';
import HomePage from './pages/homepage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
