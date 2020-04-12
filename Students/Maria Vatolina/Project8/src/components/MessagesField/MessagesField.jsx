import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'

import Message from '../Message/Message.jsx'

//ACTIONS
import { sendMessage, loadMessages } from '../../store/actions/messages_actions.js'

//redux
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

//Styles
import './style.css';
import { Input, IconButton, Box, CircularProgress } from '@material-ui/core'
import { Send, SentimentVerySatisfiedRounded, AttachmentRounded } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme => ({
   root: {
       heigth: '100vh',
       width: "100%"
    },
   msgList: {
      overflow: 'auto'
   },
   msgBlock: {
      height: 'calc(100vh - 160px)',
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
   }
 }))

class Messages extends Component {
   static propTypes = {
      chatId: PropTypes.string.isRequired,
      chats: PropTypes.object.isRequired,
      sendMessage: PropTypes.func.isRequired,
      classes: PropTypes.object,
      isLoading: PropTypes.bool.isRequired
   }

   mesagesRef= React.createRef()

   state = {
         usr: 'Me',
         msg: '',
      }   
   
  
   handleSendMessage = (sender, text) => {
      this.props.sendMessage(sender, text)
   }

   handleChange = (event) => {
         if (event.keyCode !== 13 ) {
           this.setState({ msg: event.target.value })           
         } else {
            // this.sendMessage(this.state.msg, this.state.usr)
            this.setState({ msg: ''})
         }
   }

   componentDidMount() {
      this.props.loadMessages();
   }

   scrollToBottom = () => {
      this.mesagesRef.current.lastElementChild.scrollIntoView({ behavior: 'smooth' })
   }

   render() {
      if (this.props.isLoading) {
         return <CircularProgress />
      }
      let { chatId, messages, classes} = this.props
      // let chatMessages = messages[chatId]

      let MessagesArr = []

      Object.keys(messages).forEach(messageId => {
         MessagesArr.push( 
            <Message 
            sender={ messages[messageId].user } 
            text={ messages[messageId].text } 
            key={ messageId }
            // chatId={ chatId }
            // chats={ chats }
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
                  type="text" 
                  // fullWidth={ true }
                  onChange={ this.handleChange }  
                  onKeyUp={ this.handleChange }
                  value={ this.state.msg }/>
            </Box>
            <IconButton 
            aria-label="send" 
            onClick={ () => this.handleSendMessage(this.state.usr, this.state.msg) }>
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
   messages: msgReducer.messages,
   isLoading: msgReducer.isLoading
})
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage,  loadMessages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Messages))
