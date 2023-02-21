import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import {Provider} from 'react-redux'
import {store} from './store';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  // </React.StrictMode>
)
