import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Login from './Login';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')
const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/login" element={<Login />} /> 
        <Route path="/app" element={<App />} /> 
        <Route default element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
