import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './contexts/LoginContext'
import { TodoContextProdiver } from './contexts/TodoContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ContextProvider>
      <TodoContextProdiver>
        <App />
      </TodoContextProdiver>{' '}
    </ContextProvider>{' '}
  </React.StrictMode>,
)
