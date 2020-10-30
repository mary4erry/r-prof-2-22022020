import React from 'react'
import ReactDOM from 'react-dom'

import style from './MessageField.css'
import Message from '../Message/Message.jsx'


class MessageField extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         msg: '',
         messages: [
            {user: 'Luke', text: 'Hello'},
            {user: null, text: null},
            {user: 'Luke', text: 'How are you?'}
         ],
         count: 0,
      }
   }
   handleChange = (evt) => {
      evt.keyCode !== 13 ?
         this.setState({msg: evt.target.value}) : 
         this.sendMessage(evt)
   }
   sendMessage = (evt) => {
      this.setState({ 
         messages: [...this.state.messages, { user: this.props.usr, text: this.state.msg}],
         msg: ''
      })
      evt.target.value = ''
   }
   render() {
      const { usr } = this.props
      const { messages } = this.state

      const MessagesArr = messages.map(
         message => <Message sender={message.user} text={message.text}/>
   )
      return (
         <div>
            <p>Hello { usr } !</p>
            <div>{ MessagesArr }</div>
            <div>
               <input type="text" 
                  onChange={this.handleChange}
                  onKeyUp={this.handleChange}/>
               <button
                  onClick={this.sendMessage}>
               Send
            </button>
            </div>
            
         </div>
      )
   }
}

export default MessageField