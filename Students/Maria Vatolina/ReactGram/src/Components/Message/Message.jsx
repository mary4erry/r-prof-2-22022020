import React from 'react'
import ReactDOM from 'react-dom'
import style from './Message.css'

const Message = (props) => {
   let { sender, text } = props
   sender ? sender = sender : sender = 'Bot'
   // text ? text = text : text = 'go away...'

   return (
   <div className='msg'
      style={{alignSelf: props.sender !== 'Me' 
         ? 'flex-start' : 'flex-end'}}>
      <strong className='msgSender'> { sender }: </strong>
      <p className='msgText'>{ props.sender || (!props.sender && text) ? text : 'go away...' }</p>
   </div> 
   )
}
export default Message