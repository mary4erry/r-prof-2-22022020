import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import InputMessage from './InputMessage/InputMessage.jsx'


const Dialogs = (props) => {

   let dialogsElements = props.state.dialogs.map( 
      dialog => <DialogItem 
                  user={dialog.userName} 
                  id={dialog.id} 
                  key={dialog.id}
                  userpic={dialog.userpic}/>)

   let msgElements = props.state.msgs.map(
      msg => <Message 
               text={msg.text} 
               id={msg.id} key={msg.id}/>)

   return (
      <div className={style.dialogs}>
         <div className={style.dialogs_items}>
            {dialogsElements}
         </div>
         <div className={style.messages}>
            {msgElements}

            <InputMessage 
               newMsgText={props.state.newMsgText}
               dispatch={props.dispatch}
               />
         </div>
      </div>
   )
}

export default Dialogs
