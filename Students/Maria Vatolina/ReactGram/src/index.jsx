import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import initStore from './store/store.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import Layout from './Components/Layout/Layout';
import Router from './Router/Router';

const user = 'Me'

ReactDOM.render (
   <BrowserRouter>
      <Provider store = { initStore() }>
         <MuiThemeProvider>
            <Router usr={user}/>
         </MuiThemeProvider>
      </Provider>
      
   </BrowserRouter>
   
   , document.getElementById('app')
)