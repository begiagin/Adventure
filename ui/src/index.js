import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import './style/bootstrap.rtl.css';

import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Home isProfileActive={false} />
  </BrowserRouter>
);