import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
/*import './index.css'*/
import App from "./App.jsx"
import ScrollManager from './ScrollManager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/web_model">
    <ScrollManager />
    
    <App />
    </BrowserRouter>
  </StrictMode>,
)
