// App.jsx หรือ main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // <--- ต้องมั่นใจว่าในไฟล์นี้มี Directives ของ Tailwind อยู่
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)