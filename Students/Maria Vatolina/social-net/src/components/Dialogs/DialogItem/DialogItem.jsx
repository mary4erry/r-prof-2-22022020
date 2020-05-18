import React from 'react'
import style from '../Dialogs.module.css'

import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
   let path = '/dialogs/' + props.id
   return (
      <div className={style.dialogItem}>
         <img src={props.userpic} className={style.userpic} alt="userpic"/>
         <NavLink className={style.userName} to={path}>{props.user}</NavLink>
      </div>
   )
}

export default DialogItem
