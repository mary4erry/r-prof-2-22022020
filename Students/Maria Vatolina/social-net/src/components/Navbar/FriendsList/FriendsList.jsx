import React from 'react'
// import ReactDom from 'react-dom'
import style from './FriendsList.module.css'

import { NavLink } from 'react-router-dom'

const Friend = (props) => {
   return (
      <div className={style.friends}>
         <NavLink to="/" className={style.item}>
            <img src={props.userpic} alt=""/>
            <div>{props.user}</div>
         </NavLink>
         
      </div>
   )
}
export default Friend