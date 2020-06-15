import React from 'react'
import style from './User.module.css'

const Users = (props) => {
   if (props.users.length === 0) {
      
         props.setUsers([
         { id: 1, photoUrl: 'https://easylab.top/woman/img/feedback-img/master/femuserpic.jpg', followed: true, userName: 'Dmitry K.', location: { country: 'Russia', city: 'Moscow'}, status: 'I am looking for a Job right now'},
         { id: 2, photoUrl: 'https://easylab.top/woman/img/feedback-img/master/femuserpic.jpg', followed: false, userName: 'Anna N.', location: { country: 'Belarus', city: 'Minsk' }, status: 'having fun'},
         { id: 3, photoUrl: 'https://easylab.top/woman/img/feedback-img/master/femuserpic.jpg', followed: true, userName: 'Maria T.', location: { country: 'USA', city: 'Boston' }, status: 'working'},
         { id: 4, photoUrl: 'https://easylab.top/woman/img/feedback-img/master/femuserpic.jpg', followed: false, userName: 'Jane A.', location: { country: 'Russia', city: 'Omsk' }, status: 'Trying to leave Omsk'},
      ])
   }
   

   return  <div className={style.wrap}>
      { props.users.map( u => <div key={ u.id }>
         <span>
            <div>
               <img src={u.photoUrl} className={style.photoUrl} alt=""/>
            </div>
            <div>
               { u.followed 
                  ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                  : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
               
            </div>
         </span>            
         <span>
            <span>{u.userName}</span>
            <span>{u.status}</span>
         </span>
         <span>
            <span>{u.location.country}</span>
            <span>{u.location.city}</span>
         </span>
      </div>
      ) }
   </div>
}
export default Users