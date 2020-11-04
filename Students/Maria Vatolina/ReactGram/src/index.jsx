import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Layout from './Components/Layout/Layout';

const user = 'Me'

ReactDOM.render(
   <MuiThemeProvider>
      <Layout usr={user}/>
   </MuiThemeProvider>
   
   , document.getElementById('app'),
)