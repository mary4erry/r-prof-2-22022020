import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import './style.css'
//store
import { addChat } from "../../store/actions/chats_action"
import { sendMessage, addChatToStore } from "../../store/actions/messages_action"
//redux
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'


import Messages from '../MessageField/MessageField.jsx'
import Chats from '../ChatField/ChatField.jsx'
import Header from './Header/Header'

class Layout extends Component {
   static propTypes = {
      chatId: PropTypes.number,
   }
   static defaultProps = {
      chatId: 1,
   }     
   render () {
      const { chatId, chats, messages, sendMessage, addChat, addChatToStore } = this.props
      return (
         <div className='container'>
            <Header title={ chats[chatId].title }/>
            <Grid container spacing={0}>
               <Grid item xs={3}>                  
                  <Chats chatId={ chatId } 
                     chats={ chats } 
                     messages={ messages } 
                     addChat={ addChat }
                     addChatToStore={ addChatToStore }
                  />
               </Grid>
               <Grid item xs={9}>
                  <Messages chatId={ chatId } 
                     chats={ chats } 
                     messages={ messages }
                     sendMessage={ sendMessage }
                  />
               </Grid>
            </Grid>
         </div>
      )
   }
} 
const mapStateToProps = ({ chatReducer, msgReducer }) => ({
   chats: chatReducer.chats,
   messages: msgReducer.messages,
})
const mapDispatchToProps = dispatch => 
   bindActionCreators( { addChat, sendMessage, addChatToStore }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)