import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoute from './Routes/MainRoute.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <MainRoute/>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
