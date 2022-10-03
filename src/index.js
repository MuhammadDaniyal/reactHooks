import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css'
import { AppProvider } from './useContext/UseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppProvider>
      <App />
    </AppProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

