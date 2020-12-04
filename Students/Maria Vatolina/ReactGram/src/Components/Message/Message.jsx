import React from 'react'
import ReactDOM from 'react-dom'
import './Message.css'

const Message = (props) => {
   let { sender, text, chatId, chats } = props
   sender ? sender = sender : sender = chats[chatId].title

   let msgClass = 'msg'
   sender !== 'Me' ? msgClass += ' ' + 'msgAnswer' : 
      msgClass += ' ' +  'msgMy'
   return (
      <div className={msgClass}>
         <strong className='msgSender'> { sender }: </strong>
         <p className='msgText'>{ props.sender || (!props.sender && text) 
            ? text : 'go away...' }
         </p>
      </div> 
   )
}
export default Message