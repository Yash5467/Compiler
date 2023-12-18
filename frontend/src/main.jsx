import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OutputContextProvider  from './context/OutputContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OutputContextProvider>
    <App />
    </OutputContextProvider>
  </React.StrictMode>,
)
