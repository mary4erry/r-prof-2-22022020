import React from 'react'
import DialogItem from './DialogItem/DialogItem.jsx'
import style from './Dialogs.module.css'
import Message from './Message/Message.jsx'
import { Redirect } from 'react-router-dom'


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
   }

   let onMsgChange = (e) => {
      let body = e.target.value
      props.updNewMessageText(body)
   }

   if (!props.isAuth) return <Redirect to={'/login'}/>
   
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
