import React from 'react'
import ReactDOM from 'react-dom'
import style from './Message.module.css'

const Message = (props) => {
   let { sender, text } = props
   sender ? sender = sender : sender = 'Bot'
   text ? text = text : text = 'go away...'

   return <div className='msg'>
      <strong> { sender }: </strong>
      <p>{ text }</p>
   </div> 
}
export default Message