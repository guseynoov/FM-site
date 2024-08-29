import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Navbar } from './components/Navbar.jsx'
import { Home } from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import Services from './components/Services.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <AboutUs/>
    <Services/>
  </StrictMode>,
)
