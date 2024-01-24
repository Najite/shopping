import React from 'react';
import ReactDOM from 'react-dom/client';


// import react router
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import HomePage from './pages/homepage.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  
  </React.StrictMode>,
)
