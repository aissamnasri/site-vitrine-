import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Install React Helmet for SEO
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
