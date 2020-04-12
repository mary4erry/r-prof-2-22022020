import React from 'react'
import './style.css'
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types'

import Header from '../Header/Header.jsx'
import MessagesField from '../MessagesField/MessagesField.jsx'
import ChatList from '../ChatList/ChatList.jsx'

//store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { sendMessage } from '../../store/actions/messages_actions.js'

class Layout extends React.Component {
    static propTypes = {
        // chatId: PropTypes.string,
        chats: PropTypes.object,
        sendMessage: PropTypes.func,
    }
    // static defaultProps = {
    // chatId: 1
    // }

    componentDidMount () {
        this.props.loadChats()
        this.props.loadMessages()
    }

    render() {
        let { chatId, chats, chatRooms, messages, sendMessage, push } = this.props

        return(
            <div className="container">
                <Header title={ this.props.title }/>
                <Grid container spacing={0}>
                    <Grid item xs={3} >
                    <ChatList 
                        chatId={ chatId } 
                        // chatRooms={ chatRooms } 
                        chats={ chats } 
                        messages={ messages }
                        push={ push } />
                    </Grid>
                    <Grid item xs={9}>
                        <MessagesField 
                            chatId={ chatId } 
                            chatData={ chatId ? chatRooms[chatId] : {} }
                            chats={ chats } 
                            messages={ messages } 
                            sendMessage={ sendMessage } />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = ({ msgReducer, chatReducer }) => ({
    messages: msgReducer.messages,
    chats: chatReducer.chats
})
const mapDespatchToProps = dispatch => bindActionCreators( {sendMessage}, dispatch)

export default connect(mapStateToProps, mapDespatchToProps)(Layout) 