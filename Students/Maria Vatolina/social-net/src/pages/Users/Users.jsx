import React from 'react'
import style from './User.module.css'
import userPhoto from '../../assets/userpic.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)  
   }
 
   return (
      <div className={style.wrap}>
         <div>
            { pages.map( p => 
               <span 
                  className={props.currentPage === p ? style.selectedPage : style.pageNum} key={p}
                  onClick={() => { props.onPageChanged(p)}}>{p}
               </span>
            )}
         </div>
            { props.users.map( u => 
               <div key={ u.id }>
                  <span>
                     <div>
                        <NavLink to={'/profile/' + u.id}>
                           <img src={ u.photos.small !== null ? u.photos.small : userPhoto } className={style.photoUrl} alt=""/>
                        </NavLink>                        
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
            )}
      </div>
   ) 
}

export default Users