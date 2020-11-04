import React from 'react'
import ReactDOM from 'react-dom'

import style from './MessageField.css'
import Message from '../Message/Message.jsx'


export default class MessageField extends React.Component {
   constructor(props) {
      super(props)
      this.textInput = React.createRef();
      this.state = { 
         input: '',
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
   componentDidMount() {
      this.textInput.current.focus()

   }
   componentDidUpdate() {
      if (this.state.messages[this.state.messages.length - 1].user === 'Me') {
         setTimeout(() => {
            this.setState({
               messages: [...this.state.messages, {
                  user: null,
                  text: 'ask me later...'
               }],
               input: ''
            })
         }, 500)
      }
   }
   handleChange = (evt) => {
      evt.keyCode !== 13 ?
         this.setState({
            input: evt.target.value
         }) :
         this.sendMessage(evt)
   }
   sendMessage = (evt) => {
      this.setState({
         messages: [...this.state.messages, {
            user: this.props.usr,
            text: this.state.input
         }],
         input: ''
      })
      // evt.target.value = ''
   }
   render() {
      const { usr } = this.props
      const { messages } = this.state

      const MessagesArr = messages.map(
         message => <Message sender = { message.user } text = { message.text }/>
      )
      return ( 
      <div className='layout'>
         <p> Hello { usr }! </p> 
         <div className='messageField'> 
            { MessagesArr } 
         </div> 
         <div className={'control'}>
            <div className={'msgInput-wrapper'} >
               <input className={'msgInput'} type='text' 
                  name='input'
                  onChange = { this.handleChange }
                  onKeyUp = { this.handleChange }
                  value = { this.state.input } 
                  ref={this.textInput}
               /> 
            </div>
            
            <button className={'msgSendBtn'} 
               onClick = {this.sendMessage} >
               Send 
            </button> 
         </div> 
      </div>
      )
   }
}