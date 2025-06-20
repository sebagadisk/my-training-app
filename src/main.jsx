import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './Welcome.jsx'
import Greeting from './Greeting.jsx'
import Profile from './Profile.jsx'
import ResponsiveButton from './ResponsiveButton.jsx'

// const name = 'Liz';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Profile /> */}
    <ResponsiveButton />
    <App />
    {/* <Welcome /> */}
    {/* <Greeting name={name} /> */}
  </StrictMode>,
)
