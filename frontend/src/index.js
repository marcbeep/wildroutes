import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RoutesContextProvider } from './context/RouteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesContextProvider>
      <App />
    </RoutesContextProvider>
  </React.StrictMode>
);
