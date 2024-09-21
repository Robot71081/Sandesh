import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HelmetProvider} from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div onContextMenu={(e)=>{e.preventDefault}}><App /></div>
    
    </HelmetProvider>
  </StrictMode>,
)
