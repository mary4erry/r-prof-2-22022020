import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import initStore, { history } from './store/store.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './style.css'

// import Layout from './Components/Layout/Layout';
import Router from './Router/Router';

ReactDOM.render (
      <Provider store = { initStore() }>
         <ConnectedRouter history={history}>
            <MuiThemeProvider>
               <Router />
            </MuiThemeProvider>
         </ConnectedRouter>
      </Provider>
      , document.getElementById('app')
)