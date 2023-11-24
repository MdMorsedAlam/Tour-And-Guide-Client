import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoute from './Routes/MainRoute.jsx'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <MainRoute/>
    </HelmetProvider>
  </React.StrictMode>,
)
