import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css'

alertify.set('notifier', 'position', 'top-center')
alertify.success('Have A Nice Day Everyone! I&apos;m NguyenTuanKhoa Full Stack Developer Let&apos;s build something amazing together! 😄', 7)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
