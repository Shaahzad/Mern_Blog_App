import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
