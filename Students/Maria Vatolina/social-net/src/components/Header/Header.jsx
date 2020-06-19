import React from 'react'
// import ReactDom from 'react-dom'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

// import Post from '../Post/Post.jsx'

const Header = (props) => {
   return (
      <header className={style.header}>
         <img
            src="https://cdn4.iconfinder.com/data/icons/nature-line-01/512/mountain-512.png"
            alt=""
         />
         <div className={style.loginBlock}>
            {props.isAuth ? props.login 
               : <NavLink to={'/login'}>Login</NavLink>}
            
         </div>
      </header>
   )
}
export default Header
