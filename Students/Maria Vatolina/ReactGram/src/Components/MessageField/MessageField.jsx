import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { TextField, FloatingActionButton } from 'material-ui';
import { CircularProgress, Box } from '@material-ui/core';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme => ({
   emptyBlock: {
      height: 'calc(100vh - 178px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   msgBlock: {
      height: 'calc(100vh - 178px)', 
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
   },
   msgList: {
      overflow: 'auto',
   },
   control:{
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   msgInputWrapper: {
      width: '85%',
      marginRight: '10px',
   },
   sendBtn: {
      margin: '10px',
      backgroundColor:'lightgrey',
      borderRadius: '30px',
   }
}))

class MessageField extends React.Component {
   static propTypes = {
      isLoading: PropTypes.bool.isRequired,
   }
   state = { 
      usr: 'Me',
      input: '',
   }
   msgList = React.createRef()

   scrollToNewMsg () {
      if (this.msgList.current && this.msgList.current.lastChild) {
         this.msgList.current.lastChild.scrollIntoView({block: 'end'})
      }
   }
   componentDidUpdate() {
      this.scrollToNewMsg() 
   }

   sendMessage = (sender, text) => {
      const { messages, sendMessage, chatId } = this.props
      console.log(messages);

      sendMessage(chatId, sender, text)
   }
   
   handleSendMessage = (sender, message ) => {
      this.setState({input: ''})
      if (sender == 'Me') this.sendMessage(sender, message)
   }

   handleChange = (evt) => {
      if (evt.keyCode !== 13){
         this.setState({ input: evt.target.value })
      } else {
         this.sendMessage( this.state.usr, this.state.input )
         this.setState({input: ''})
      } 
   }
   
   render() {
      const { input } = this.state
      const { chatId, chats, classes } = this.props

      const MessagesArr = []
      if (chatId) {
         let chatMessages = chats[chatId].messageList
         Object.keys(chatMessages).forEach ( messageId => 
         MessagesArr.push (
            <Message 
               sender = { chatMessages[messageId].sender } 
               text = { chatMessages[messageId].text }
               key = { messageId} />
         ))
       }
      if (this.props.isLoading) {
         return <CircularProgress />
      }
      return ( 
         <div>
            {!chatId && 
               <Box className={classes.emptyBlock}>
                  Select a chat
               </Box> }
            {chatId && <div>
               <div className={classes.msgBlock}>
                  <div className={classes.msgList} ref={ this.msgList }> 
                     { MessagesArr ? MessagesArr : '' } 
                  </div> 
               </div>
                  <div className={classes.control}>
                     <div className={classes.msgInputWrapper} >
                        <TextField 
                           className={classes.msgInput}
                           fullWidth
                           autoFocus={ true }
                           type='text'    
                           name='input'
                           onChange = { this.handleChange }
                           onKeyUp = { this.handleChange }
                           value = { input } 
                        /> 
                     </div>
                     <FloatingActionButton
                        className={classes.sendBtn} 
                        onClick = { () => this.handleSendMessage(this.state.usr, this.state.input)} >
                        <SendIcon fontSize="small"/> 
                     </FloatingActionButton> 
                  </div> 
               </div>
            }
         </div>
      )
   }
}

export default withStyles(useStyles)(MessageField)