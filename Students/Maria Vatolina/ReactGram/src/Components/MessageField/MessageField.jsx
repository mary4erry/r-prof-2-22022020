import React from 'react'
import ReactDOM from 'react-dom'

import './MessageField.css'
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx'

class MessageField extends React.Component {
   constructor(props) {
      super(props)
      this.textInput = React.createRef();
      this.state = { 
         usr: 'Me',
         input: '',
      }
   }
   componentDidMount() {
      this.textInput.current.focus()
   }

   sendMessage = (sender, text) => {
      const { messages, sendMessage, chatId } = this.props
      const messageId = Object.keys(messages[chatId]).length + 1

      sendMessage(chatId, messageId, sender, text)
   }

   handleChange = (evt) => {
      if (evt.keyCode !== 13){
         this.setState({ input: evt.target.value })
      } else {
         this.sendMessage( this.state.usr, this.state.input )
         this.setState({input: ''})
      } 
   }
   
   handleSendMessage = (sender, message ) => {
      this.setState({input: ''})
      if (sender == 'Me') this.sendMessage(sender, message)
   }

   render() {
      const { input } = this.state
      const { chatId, chats, messages } = this.props
      const chatMessages = messages[chatId]

      const MessagesArr = []
      Object.keys(chatMessages).forEach ( messageId => MessagesArr.push (<Message 
         sender = { chatMessages[messageId].user } 
         text = { chatMessages[messageId].text }
         key = { messageId} 
         />)
      )

      return ( 
      <div className='root'>
         <div className='messageField'> 
            { MessagesArr } 
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