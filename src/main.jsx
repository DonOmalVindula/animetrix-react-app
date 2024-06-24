import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "@asgardeo/auth-react";
import config from "./config.json";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider config={ config }>
        <App />
    </AuthProvider>
  </React.StrictMode>,
)
