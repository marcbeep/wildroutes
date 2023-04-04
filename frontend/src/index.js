import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RoutesContextProvider } from './context/RouteContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RoutesContextProvider>
        <App />
      </RoutesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
