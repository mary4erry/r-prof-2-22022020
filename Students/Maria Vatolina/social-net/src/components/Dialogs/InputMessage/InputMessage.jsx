import React from 'react'
// import style from './Dialogs.module.css'
// import DialogItem from './DialogItem/DialogItem.jsx'
// import Message from './Message/Message.jsx'

const InputMessage = (props) => {

   let newMsgElement = React.createRef()

   let sendMessage =() => {
      // props.sendMessage()
      props.dispatch({type: 'SEND_MESSAGE'})
   }

   let onMsgChange = () => {
      let msg = newMsgElement.current.value
      // props.updNewMessageText(msg)
      props.dispatch({ type: 'UPD_NEW_MESSAGE_TEXT', newText: msg})
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
