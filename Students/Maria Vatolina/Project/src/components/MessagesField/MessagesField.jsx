import React from 'react'
import ReactDOM from 'react-dom'

import './MessageField.css'
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx'

//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/es/connect/connect'
import { sendMessage } from '../../store/actions/messages_action.js'


class MessageField extends React.Component {
   constructor(props) {
      super(props)
      this.textInput = React.createRef();
      this.state = { 
         // messages: [
         //    { user: 'Me', text: 'Hello' },
         //    { user: null, text: null },
         //    { user: 'Me', text: 'How are you?' },
         //    { user: null, text: 'lol' },
         // ],
         // chats: {
         //       1: {title: 'Чат 1', messageList: [1]},
         //       2: {title: 'Чат 2', messageList: [2]},
         //       3: {title: 'Чат 3', messageList: [3]},
         //    },
         input: '',
      }
   }
   componentDidMount() {
      this.textInput.current.focus()

   }
   componentDidUpdate(prevProps, prevState) {
      const {messages} = this.state
      
      if (prevState.messages.length < this.state.messages.length &&
         this.state.messages[this.state.messages.length - 1].user === 'Me') {
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
      // const { usr } = this.props
      const { chats, input } = this.state
      const { chatId, messages} = this.props

      const MessagesArr = messages.map(
         message => <Message sender = { message.user } text = { message.text }/>
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
               onClick = {this.sendMessage} >
               <SendIcon /> 
            </FloatingActionButton> 
         </div> 
      </div>
      )
   }
}
const mapStateToProps = ({ msgReducer }) => ({
   messages: msgReducer.messages
})
const mapDispatchToProps = dispatch => 
   bindActionCreators( { sendMessage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MessageField)