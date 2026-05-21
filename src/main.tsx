import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.tsx'
import './index.css'

const app = ReactDOM.createRoot(document.getElementById('root')!)

app.render(
  <React.StrictMode>
    <BrowserRouter>
      <ElementPlus locale={zhCn}>
        <App />
      </ElementPlus>
    </BrowserRouter>
  </React.StrictMode>,
)
