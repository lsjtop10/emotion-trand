import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./App.css"
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientId: string = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <App/>
    </GoogleOAuthProvider>
   
  </React.StrictMode>,
)
