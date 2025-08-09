import React from 'react'
import ReactDOM from 'react-dom/client'
import appIcon from '@/resources/build/icon.png'
import { WindowContextProvider, menuItems } from '@/lib/window'
import App from './app'
import './styles/app.css'
import { Provider } from './provider'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <WindowContextProvider titlebar={{ title: 'Electron React HeroUI 应用', icon: appIcon, menuItems }}>
        <App />
      </WindowContextProvider>
    </Provider>
  </React.StrictMode>
)
