import React from 'react'
import ReactDOM from 'react-dom'

import './index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MessageField from './Components/MessageField/MessageField.jsx'
import Layout from './Components/Layout/Layout';

const user = 'Me'

ReactDOM.render(
   <MuiThemeProvider>
      <Layout usr = {user}/>
   </MuiThemeProvider>

   ,document.getElementById('app'),
)