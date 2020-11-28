import React from 'react'
import ReactDOM from 'react-dom'

import './MessageField.css'
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx'

//ACTIONS
import { sendMessage } from '../../store/actions/messages_action.js'

//redux
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

class MessageField extends React.Component {
   constructor(props) {
      super(props)
      this.textInput = React.createRef();
      this.state = { 
         usr: 'Me',
         input: '',
         chats: {
               1: {title: 'Чат 1', messageList: [1]},
               2: {title: 'Чат 2', messageList: [2]},
               3: {title: 'Чат 3', messageList: [3]},
            },
      }
   }
   componentDidMount() {
      this.textInput.current.focus()

   }
   componentDidUpdate() {  
      const {messages} = this.props
      if (Object.keys(messages).length % 2 === 1) {
         setTimeout(() => {
            this.sendMessage(null, 'ask me later...')
         }, 500)
      }
   }

   sendMessage = (sender, text) => {
      const { messages, sendMessage } = this.props
      const messageId = Object.keys(messages).length + 1

      sendMessage(messageId, sender, text)
   }

   handleChange = (evt) => {
      if (evt.keyCode !== 13){
         this.setState({ input: evt.target.value })
      } else {
         this.sendMessage(this.state.input, this.state.usr)
         this.setState({input: ''})
      } 
   }
   
   handleSendMessage = (sender, message ) => {
      this.setState({input: ''})
      if (sender == 'Me') this.sendMessage(sender, message)
   }

   render() {
      const { chats, input } = this.state
      const { chatId, messages } = this.props

      const MessagesArr = []
      Object.keys(messages).forEach ( key => MessagesArr.push (<Message 
         sender = { messages[key].user } 
         text = { messages[key].text }
         key = { key} 
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
                  // onKeyUp = { this.handleChange }
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

const mapStateToProps = ({ msgReducer }) => ({
   messages: msgReducer.messages
})
const mapDispatchToProps = dispatch => 
   bindActionCreators( { sendMessage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MessageField)