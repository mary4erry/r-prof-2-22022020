import React from 'react'
import { sendMessageActionCreator, onMsgChangeActionCreator } from '../../../redux/state.js'

// import style from './Dialogs.module.css'
// import DialogItem from './DialogItem/DialogItem.jsx'
// import Message from './Message/Message.jsx'
const InputMessage = (props) => {

   let newMsgElement = React.createRef()

   let sendMessage =() => {
      // props.sendMessage()
      props.dispatch(sendMessageActionCreator())
   }

   let onMsgChange = () => {
      let msg = newMsgElement.current.value
      // props.updNewMessageText(msg)
      props.dispatch(onMsgChangeActionCreator(msg))
      // console.log(msg);
      
   }

   return (
      <div>
         <textarea
            onChange={onMsgChange} 
            value={props.newMsgText}
            ref={newMsgElement}
            name="post" 
            placeholder="Enter your message..."
            id="new-post" 
            cols="70" 
            rows="2"/>
         <div>
            <button 
            onClick={ sendMessage }
            >Send message</button>
         </div>
      </div>
   )
}

export default InputMessage
