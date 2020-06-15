import React from 'react'
import style from './User.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/userpic.png'

const Users = (props) => {
   if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
         props.setUsers(response.data.items)
      })
   }
   

   return  <div className={style.wrap}>
      { props.users.map( u => <div key={ u.id }>
         <span>
            <div>
               <img src={ u.photos.small !== null ? u.photos.small : userPhoto } className={style.photoUrl} alt=""/>
            </div>
            <div>
               { u.followed 
                  ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                  : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
               
            </div>
         </span>            
         <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
         </div>
         <div>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
         </div>
      </div>
      ) }
   </div>
}
export default Users