import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import initStore, { history } from './store/store.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './style.css'

import Router from './Router/Router';

const { store, persistor } = initStore()

ReactDOM.render (
      <Provider store = { store }>
         <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={history}>
               <MuiThemeProvider>
                  <Router />
               </MuiThemeProvider>
            </ConnectedRouter>
         </PersistGate>
      </Provider>
      , document.getElementById('app')
)