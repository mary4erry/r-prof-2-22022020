import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
// import { Grid, Container } from '@material-ui/core';

import './index.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import 'typeface-roboto'

import Layout from './components/Layout/Layout.jsx'

//store
import { Provider } from 'react-redux'
import initStore from './store/store.js'
// import { Router } from '@material-ui/icons';

import Router from './router/router.jsx'
import { BrowserRouter } from 'react-router-dom'

import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/store.js'

// let user = 'Darth Vader'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#00695f',
            main: '#009688',
            dark: '#33ab9f',
        },
        secondary: {
          main: '#ffe082',
        },
        background: {
            paper: '#00695f',
            default: "#fff"
         }
      },
})

ReactDom.render (
      <Provider store = { initStore() }>
         <ConnectedRouter history={ history }>
            <ThemeProvider theme={theme}>
               <Router />
            </ThemeProvider>
         </ConnectedRouter>
      </Provider>
   , document.getElementById('app')
)