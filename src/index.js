import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UserProvider } from './userContext';

// import './styles.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <UserProvider>
    <App />
  </UserProvider>,
document.getElementById('root'))

serviceWorker.unregister()