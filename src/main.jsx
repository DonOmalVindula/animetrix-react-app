import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: import.meta.env.VITE_SIGN_IN_REDIRECT_URL,
  signOutRedirectURL: import.meta.env.VITE_SIGN_OUT_REDIRECT_URL,
  clientID: import.meta.env.VITE_CLIENT_ID,
  baseUrl: import.meta.env.VITE_BASE_URL,
  scope: import.meta.env.VITE_SCOPE.split(','),
  resourceServerURLs: import.meta.env.VITE_RESOURCE_SERVER_URLS.split(',')
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider config={ config }>
        <App />
    </AuthProvider>
  </React.StrictMode>,
)
