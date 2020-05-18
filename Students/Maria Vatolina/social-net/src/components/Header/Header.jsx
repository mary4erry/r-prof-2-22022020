import React from 'react'
// import ReactDom from 'react-dom'
import style from './Header.module.css'

// import Post from '../Post/Post.jsx'

const Header = () => {
   return (
      <header className={style.header}>
         <img
            src="https://cdn4.iconfinder.com/data/icons/nature-line-01/512/mountain-512.png"
            alt=""
         />
      </header>
   )
}
export default Header
