import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.tsx'
import './index.css'

AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: false,
  offset: 50,
  delay: 100,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)