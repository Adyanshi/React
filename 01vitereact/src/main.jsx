import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-dev-runtime.js'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target : '_blank'},
  'click me to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // reactElement
    <App/>
  
)