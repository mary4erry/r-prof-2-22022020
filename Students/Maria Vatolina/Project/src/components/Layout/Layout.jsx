import React from 'react'
import './style.css'
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types'

import Header from '../Header/Header.jsx'
import Messages from '../MessagesField/MessagesField.jsx'
import ChatList from '../ChatList/ChatList.jsx'

//store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadChats, addChat, deleteChat } from '../../store/actions/chat_actions'
import { push } from 'connected-react-router'

import { sendMessage, loadMessages } from '../../store/actions/messages_actions.js'

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        // chats: PropTypes.object,
        // messages: PropTypes.object,
        sendMessage: PropTypes.func,
     }
     static defaultProps = {
        chatId: 1
     }

    render() {
        let { isLoading, chatId, chatRooms, addChat, deleteChat, sendMessage, push } = this.props

        return(
            <div className="container">
                <Header chatId={ chatId }/>
                <Grid container spacing={0}>
                    <Grid item xs={3} >
                    <ChatList 
                        chatId={ chatId } 
                        isLoading={ isLoading } 
                        chatRooms={ chatRooms }
                        addChat={ addChat }
                        push={ push }
                    />
               </Grid>
               <Grid item xs={9}>
                  <Messages 
                  chatId={ chatId } 
                  sendMessage={ sendMessage } />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = ({ msgReducer, chatReducer }) => ({
    isLoading: chatReducer.isLoading,
    chatRooms: chatReducer.chatRooms
})
const mapDespatchToProps = dispatch => bindActionCreators( { loadChats, loadMessages, addChat, sendMessage, push }, dispatch)

export default connect(mapStateToProps, mapDespatchToProps)(Layout) 