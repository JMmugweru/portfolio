/** 
 * * @copyright 2024  [Jm_Mugweru]
 * * @author [Jm_Mugweru]
 * @license Apache-2.0
  */

/* nodes */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* components */
import App from './App.jsx'
import 'lenis/dist/lenis.css'

/* 
*CSS
*/
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
