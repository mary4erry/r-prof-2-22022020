import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import './style.css'

//store
import { loadСhats, addChat, deleteChat } from "../../store/actions/chats_action"
import { loadMessages, sendMessage } from "../../store/actions/messages_action"

//redux
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import { push } from 'connected-react-router'

import Messages from '../MessageField/MessageField.jsx'
import Chats from '../ChatField/ChatField.jsx'
import Header from './Header/Header'

class Layout extends Component {
   static propTypes = {
      chatId: PropTypes.string,
      loadMessages: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired,
      push: PropTypes.func.isRequired,
   } 
   
   componentDidMount () {
      this.props.loadСhats()
      this.props.loadMessages()
   }

   render () {
      const { isLoading, chatId, chats, messages, sendMessage, addChat, deleteChat, push } = this.props     
      return (
         <div className='container'>
            <Header 
               title={ chats[chatId] ? chats[chatId].title : '' }/>
            <Grid container spacing={0}>
               <Grid item xs={3}>                  
                  <Chats chatId={ chatId } 
                     chats={ chats } 
                     messages={ messages } 
                     addChat={ addChat }
                     push={ push }
                     deleteChat={ deleteChat }
                  />
               </Grid>
               <Grid item xs={9}>
                  <Messages chatId={ chatId } 
                     chats={ chats } 
                     messages={ messages } 
                     sendMessage={ sendMessage }
                     isLoading={isLoading}
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
   isLoading: msgReducer.isLoading,
})
const mapDispatchToProps = dispatch => 
   bindActionCreators( { loadСhats, addChat, push, sendMessage, loadMessages, deleteChat }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)