import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './style.css';
import { Input, IconButton, Box } from '@material-ui/core'
import { Send, SentimentVerySatisfiedRounded, AttachmentRounded } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

import Header from '../Header/Header.jsx'
import Message from '../Message/Message.jsx'

//ACTIONS
import { sendMessage } from '../../store/actions/messages_actions.js'

//redux
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

const useStyles = (theme => ({
   msgList: {
      overflow: 'auto'
   },
   msgBlock: {
      height: 'calc(100vh - 163px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: theme.spacing(2)
   },
   sendForm: {
      maxHeight: '60px',
      position: 'static',
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(1, 2, 0, 2)
   }
 }))

class Messages extends Component {
   mesagesRef= React.createRef()
   constructor(props) {
      super(props)
      this.state = {
         usr: 'Me',
         msg: '',
      }   
   }

   sendMsg = (text, sender) => {
      // console.log('props:', this.props)
      let { chatId, messages, sendMessage } = this.props
      let chatMessages = messages[chatId]
      const messageId = Object.keys(chatMessages).length + 1;

      sendMessage(chatId, messageId, sender, text)
      // console.log('chatMessages:', messageId)
      this.scrollToBottom()   
   }

   handleSendMessage = (text, sender) => {
      this.setState({ msg: '' })
      // if (sender == 'Me')
      //    this.sendMsg (text, sender) 
   }

   handleChange = (event) => {
         if (event.keyCode !== 13 ) {
           this.setState({ msg: event.target.value })           
         } else {
            this.sendMsg(this.state.msg, this.state.usr)
            this.setState({ msg: ''})
         }
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

   componentDidMount() {
      
   }

   scrollToBottom = () => {
      this.mesagesRef.current.lastElementChild.scrollIntoView({ behavior: 'smooth' })
   }

   render() {
      let { messages, classes, chatId, chats } = this.props
      let chatMessages = messages[chatId]

      let MessagesArr = []

      Object.keys(chatMessages).forEach(messageId => {
         MessagesArr.push( 
            <Message 
            sender={ chatMessages[messageId].user } 
            text={ chatMessages[messageId].text } 
            key={ messageId }
            chatId={ chatId }
            chats={ chats }
         />)
      })

      return (
         <div  className={classes.root}>
         
         <Box className={classes.msgBlock}>
            <Box className={classes.msgList} ref={this.mesagesRef}>
               { MessagesArr }
            </Box>
         </Box>
         <Box className={classes.sendForm} p={2}>
            <Box width="85%" mr={2}>
               <Input placeholder="Enter your message..."
                  fullWidth={ true }
                  onChange={ this.handleChange }  
                  onKeyUp={ this.handleChange }
                  value={ this.state.msg }/>
            </Box>
            <IconButton aria-label="send" onClick={ () => this.handleSendMessage(this.state.msg, this.state.usr) }>
               <Send />
            </IconButton>
            <IconButton aria-label="smile">
               <SentimentVerySatisfiedRounded />
            </IconButton>
            <IconButton aria-label="attachment" >
               <AttachmentRounded />
            </IconButton>
         </Box>

      </div>
      )
   }
}

const mapStateToProps = ({ msgReducer }) => ({
   messages: msgReducer.messages
})
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Messages))
