import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'


const Dialogs = (props) => {
   let state = props.dialogsPage

   let dialogsElements = state.dialogs.map(dialog => 
   <DialogItem 
      user={dialog.userName} 
      id={dialog.id} 
      key={dialog.id}
      userpic={dialog.userpic}/>)

   let msgElements = state.msgs.map(msg => 
   <Message 
      text={msg.text} 
      id={msg.id} key={msg.id}/>)

   let newMsgText = state.newMsgText
            
   let onSendMessageClick =() => {
      props.sendMessage()
      // props.store.dispatch(sendMessageActionCreator())
   }

   let onMsgChange = (e) => {
      let body = e.target.value
      props.updNewMessageText(body)
      // props.store.dispatch(onMsgChangeActionCreator(msg))
   }

   return (
      <div className={style.dialogs}>
         <div className={style.dialogs_items}>

            {dialogsElements}
         </div>
         <div className={style.messages}>

            {msgElements}

            <div>
               <textarea
                  onChange={onMsgChange} 
                  value={newMsgText}
                  name="post" 
                  placeholder="Enter your message..."
                  id="new-post" 
                  cols="70" 
                  rows="2"/>
               <div>
                  <button 
                  onClick={ onSendMessageClick }
                  >Send message</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs
