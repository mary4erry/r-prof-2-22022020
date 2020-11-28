import React, { Component } from 'react'
import { Grid, Header } from '@material-ui/core'
import PropTypes from 'prop-types'
import './style.css'

import Messages from '../MessageField/MessageField.jsx'
import Chats from '../ChatField/ChatField.jsx'

export default class Layout extends Component {
   static propTypes = {
      chatId: PropTypes.number,
   }
   static defaultProps = {
      chatId: 1,
   }     
   render () {
      const { chatId } = this.props

      return (
         <div className='container'>
            <div className={'header'}
               // chatId={ chatId }
            > 
               <p> ReactGram &copy; </p>
               {/* <p> Chat: {chatId} </p>  */}
            </div>
            <Grid container spacing={0}>
               <Grid item xs={3}>
                  <Chats 
                  />
               </Grid>
               <Grid item xs={9}>
                  <Messages />
               </Grid>
            </Grid>
         </div>
      )
   }
} 