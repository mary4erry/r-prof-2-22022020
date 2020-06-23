import React from 'react'
// import ReactDom from 'react-dom'
import style from './Navbar.module.css'

// import Friend from './FriendsList/FriendsList.jsx'

import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
   // debugger
   // let state = props.navbar
   // let friendsList = state.friends.map (f => 
   //    <Friend 
   //       user={f.userName}
   //       id={f.id}
   //       userpic={f.userpic}/>
   // )
   return (
      <nav className={style.navbar}>
         <div className={style.item}>
            <NavLink to="/profile" activeClassName={style.active}>
               Profile
            </NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/dialogs" activeClassName={style.active}>
               Messages
            </NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/news" activeClassName={style.active}>
               News
            </NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/*" activeClassName={style.active}>Music</NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/**" activeClassName={style.active}>Settings</NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/users" activeClassName={style.active}>
               Users
            </NavLink>
         </div>
         <div className={style.friendsBlock}>
            <h2>Friends</h2>
            <div className={style.friendsList}>
               {/* {friendsList} */}
            </div>
            
         </div>

      </nav>
   )
}
export default Navbar
