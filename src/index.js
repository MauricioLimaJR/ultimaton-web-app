import React from 'react'
import ReactDOM from 'react-dom'
// Style static Files
import './static/css/index.css'
import './static/js/toastfyStyles'
// Custom components
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
