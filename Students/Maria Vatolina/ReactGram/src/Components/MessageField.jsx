import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message.jsx'






   
const user = 'Luke'

class MessageField extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         msgArr: [
            {user: 'Luke', text: 'Hello'},
            {user: null, text: 'Hi!'},
            {user: 'Luke', text: 'How are you?'}
         ],
         

       };
   }
   sendMessage() {

      console.log('message was send');
   }
   render() {
      let { msgArr } = this.state
      const MessagesArr = msgArr.map(
         message => <Message sender={message.user} text={message.text}/>
   )
      return (
         <div>
         <p>Hello {user}</p>
         {MessagesArr}
         <button
            onClick={this.sendMessage}>
            Send
         </button>
      </div>
      );
   }
}

export default MessageField