import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToggleButtons from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleButtons />
  </StrictMode>,
)
