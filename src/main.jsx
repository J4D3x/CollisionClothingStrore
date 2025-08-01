import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SharedContext, SharedCartValueProvider } from './NumOFOr.jsx'
import './index.css'
import App from './App.jsx'


document.title ="Collision";
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <SharedCartValueProvider>
    <App />
  </SharedCartValueProvider>

  </StrictMode>
 
    

)
