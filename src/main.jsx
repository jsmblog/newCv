import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import globalEn from './Translations/en/en/global.json'
import globalEs from './Translations/en/es/global.json'
i18next.init({
  interpolation : {escapeValue:false} ,
  lng : "en" ,
  resources : {
    en: {
      global : globalEn
    }
    ,
    es: {
      global : globalEs
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next} >
    <App />
    </I18nextProvider>
  </React.StrictMode>,
)
