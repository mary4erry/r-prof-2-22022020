import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './MessageField.css'
import { TextField, FloatingActionButton } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress'
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx'

class MessageField extends React.Component {
   static propTypes = {
      isLoading: PropTypes.bool.isRequired,
   }
   textInput = React.createRef();
   state = { 
      usr: 'Me',
      input: '',
   }
   componentDidMount() {
      this.textInput.current.focus()
   }

   sendMessage = (sender, text) => {
      const { messages, sendMessage, chatId } = this.props
      console.log(messages);
      // const messageId = Object.keys(messages[chatId]).length + 1

      sendMessage(chatId, messageId, sender, text)

      // let newMsg = {
      //    sender: sender,
      //    text: text,
      //    chatId: chatId
      // }
      // fetch('/api/message', {
      //    method: 'POST', headers: { 'Content-Type': 'application/json' },
      //    body: JSON.stringify(newMsg)
      // })
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
      const { chatId, chats } = this.props

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
         
      <div className='root'>
         <div className='messageField'> 
            { MessagesArr ? MessagesArr : '' } 
         </div> 
         <div className={'control'}>
            <div className={'msgInput-wrapper'} >
               <TextField 
                  className={'msgInput'} 
                  fullWidth
                  type='text'    
                  name='input'
                  onChange = { this.handleChange }
                  onKeyUp = { this.handleChange }
                  value = { input } 
                  ref={this.textInput}
               /> 
            </div>
            
            <FloatingActionButton
               className={'msgSendBtn'} 
               onClick = { () => this.handleSendMessage(this.state.usr, this.state.input)} >
               <SendIcon /> 
            </FloatingActionButton> 
         </div> 
      </div>
      )
   }
}

export default MessageField