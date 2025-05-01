import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { getToken } from './services/authservice';

axios.interceptors.request.use((config) => {
  const token = getToken();
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
},
(error) => {
    Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


