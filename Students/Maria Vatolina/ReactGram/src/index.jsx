import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import initStore from './store/store.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './style.css'

// import Layout from './Components/Layout/Layout';
import Router from './Router/Router';

ReactDOM.render (
   <BrowserRouter>
      <Provider store = { initStore() }>
         <MuiThemeProvider>
            <Router />
         </MuiThemeProvider>
      </Provider>
      
   </BrowserRouter>
   
   , document.getElementById('app')
)