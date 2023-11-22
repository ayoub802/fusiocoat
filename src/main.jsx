import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next'
import global_en from "../src/translations/en/globale.json"
import global_fr from "../src/translations/fr/globale.json"
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'fr',
  resources:{
    en: {
      global: global_en
    },
    fr: {
      global: global_fr
    }
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
       <App />
    </I18nextProvider>
  </React.StrictMode>,
)
