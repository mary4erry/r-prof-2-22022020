import React from 'react'
import ReactDOM from 'react-dom'

import style from './MessageField.css'
import Message from '../Message/Message.jsx'


export default class MessageField extends React.Component {
   constructor(props) {
      super(props)
      this.state = { 
         msg: '',
         messages: [{
               user: 'Me',
               text: 'Hello'
            },
            {
               user: null,
               text: null
            },
            {
               user: 'Me',
               text: 'How are you?'
            },
            {
               user: null,
               text: 'lol'
            },
         ],
         count: 0,
      }
   }
   componentDidUpdate() {
      if (this.state.messages[this.state.messages.length - 1].user === 'Me') {
         setTimeout(() => {
            this.setState({
               messages: [...this.state.messages, {
                  user: null,
                  text: 'ask me later...'
               }],
               msg: ''
            })
         }, 500)
      }
   }
   handleChange = (evt) => {
      evt.keyCode !== 13 ?
         this.setState({
            msg: evt.target.value
         }) :
         this.sendMessage(evt)
   }
   sendMessage = (evt) => {
      this.setState({
         messages: [...this.state.messages, {
            user: this.props.usr,
            text: this.state.msg
         }],
         msg: ''
      })
      // evt.target.value = ''
   }
   render() {
      const { usr } = this.props
      const { messages } = this.state

      const MessagesArr = messages.map(
         message => <Message sender = { message.user } text = { message.text }/>
      )
      return ( <div>
         <p> Hello { usr }! </p> 
         <div> { MessagesArr } 
         </div> 
         <div>
            <input type="text"
               onChange = { this.handleChange }
               onKeyUp = { this.handleChange }
               value = { this.state.msg } /> 
            <button onClick = {this.sendMessage}>
               Send 
            </button> 
         </div> 
      </div>
      )
   }
}