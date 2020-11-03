import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
// import PropTypes from 'prop-types'
import './style.css'

import Messages from '../MessageField/MessageField.jsx'
import Chats from '../ChatField/ChatField.jsx'

export default class Layout extends Component {
  
   render () {
      const { usr } = this.props

      return (
         <div className="container">
            <div className={'header'}> ReactGram &copy;</div>
            <Grid container spacing={0}>
               <Grid item xs={3}>
                  <Chats 
                  />
               </Grid>
               <Grid item xs={9}>
                  <Messages usr={usr}
                  />
               </Grid>
            </Grid>
         </div>
      )
   }
} 