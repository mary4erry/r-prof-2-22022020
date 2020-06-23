import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

import './style.css'
import { Input, IconButton, Box, CircularProgress } from '@material-ui/core'
import {
   Send,
   SentimentVerySatisfiedRounded,
   AttachmentRounded,
} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

import Message from '../Message/Message.jsx'

//ACTIONS
import {
   sendMessage,
   loadMessages,
} from '../../store/actions/messages_actions.js'

//redux
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

const useStyles = (theme) => ({
   msgList: {
      overflow: 'auto',
   },
   msgBlock: {
      height: 'calc(100vh - 163px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
   },
   sendForm: {
      maxHeight: '60px',
      position: 'static',
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(1, 2, 0, 2),
      backgroundColor: theme.palette.background.default,
   },
})

class Messages extends Component {
   mesagesRef = React.createRef()
   constructor(props) {
      super(props)
      this.state = {
         usr: 'Me',
         msg: '',
      }
   }
   static propTypes = {
      isLoading: PropTypes.bool.isRequired,
   }

   // handleSendMessage = (sender, text, chatId) => {
   //    this.props.sendMessage(sender, text, chatId)
   // }

   sendMsg = (sender, text) => {
      let { chatId, sendMessage } = this.props
      sendMessage(chatId, sender, text)
   }

   handleSendMessage = (sender, text) => {
      this.setState({ msg: '' })
      if (text.length > 0) this.sendMsg(sender, text)
   }

   handleChange = (event) => {
      if (event.keyCode !== 13) {
         this.setState({ msg: event.target.value })
      }
      // else {
      //    this.sendMsg(this.state.msg, this.state.usr)
      //    this.setState({ msg: ''})
      // }
   }

   componentDidMount() {
      this.props.loadMessages()
   }
   // componentDidUpdate (prevProps) {
   //    const { messages, chatId } = this.props;
   //    let chatMessages = messages[chatId]
   //    if (Object.keys(prevProps.messages).length < Object.keys(chatMessages).length &&
   //    chatMessages[Object.keys(chatMessages).length].user === this.state.usr) {
   //       setTimeout(() => {
   //       this.sendMsg('Please, wait...');
   //       }, 500)
   //    }
   // }

   scrollToBottom = () => {
      this.mesagesRef.current.lastElementChild.scrollIntoView({
         behavior: 'smooth',
      })
   }

   render() {
      if (this.props.isLoading) {
         return <CircularProgress />
      }

      let { messages, classes, chatId, chats } = this.props
      // let chatMessages = messages[chatId]

      let MessagesArr = []

      Object.keys(messages).forEach((messageId) => {
         MessagesArr.push(
            <Message
               sender={messages[messageId].user}
               text={messages[messageId].text}
               key={messageId}
               chatId={chatId}
               chats={chats}
            />
         )
      })

      return (
         <div className={classes.root}>
            <Box className={classes.msgBlock}>
               <Box className={classes.msgList} ref={this.mesagesRef}>
                  {MessagesArr}
               </Box>
            </Box>
            <Box className={classes.sendForm} p={2}>
               <Box width="85%" mr={2}>
                  <Input
                     placeholder="Enter your message..."
                     fullWidth={true}
                     onChange={this.handleChange}
                     onKeyUp={this.handleChange}
                     value={this.state.msg}
                  />
               </Box>
               <IconButton
                  aria-label="send"
                  onClick={() =>
                     this.handleSendMessage(this.state.usr, this.state.msg, 1)
                  }
               >
                  <Send />
               </IconButton>
               <IconButton aria-label="smile">
                  <SentimentVerySatisfiedRounded />
               </IconButton>
               <IconButton aria-label="attachment">
                  <AttachmentRounded />
               </IconButton>
            </Box>
            <div className={style.block}>
               <Block />
            </div>
         </div>
      )
   }
}

const mapStateToProps = ({ msgReducer }) => ({
   messages: msgReducer.messages,
   // chats: chatReducer.chats,
   isLoading: msgReducer.isLoading,
})
const mapDispatchToProps = (dispatch) =>
   bindActionCreators({ sendMessage, loadMessages }, dispatch)

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withStyles(useStyles)(Messages))
