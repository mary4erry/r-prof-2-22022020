import React from 'react'
import style from './User.module.css'
import userPhoto from '../../assets/userpic.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

const Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)  
   }
 
   return (
      <div className={style.wrap}>
         <div className={style.pages}>
            { pages.map( p => 
               <span 
                  className={props.currentPage === p ? style.selectedPage : style.pageNum} key={p}
                  onClick={() => { props.onPageChanged(p)}}>{p}
               </span>
            )}
         </div>
            { props.users.map( u => 
               <div className={style.userItem} key={ u.id }>
                  <span>
                     <div>
                        <NavLink to={'/profile/' + u.id}>
                           <img 
                              src={ u.photos.small !== null ? u.photos.small : userPhoto } 
                              className={style.photoUrl} alt=""/>
                        </NavLink>                        
                     </div>
                     
                  </span> 
                  <div  className={style.userInfo}>
                     <div>
                        <div  className={style.userInfo_name}>{u.name}</div>
                        <div>{u.status}</div>
                     </div>
                     <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                     </div>
                  </div>           
                  <div className={style.button_follow}>
                     { u.followed 
                        ? <button disabled={props.followingInProgress.some(id => id ===u.id)}   onClick={() => { 
                           props.toggleFollowingProgress(true, u.id)
                           axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                              withCredentials: true,
                              headers: {
                                 'API-KEY': '00c9ff68-884f-4d55-9f3f-14b040cb34f7'
                              }
                           })
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                 }
                                 props.toggleFollowingProgress(false, u.id)
                              })
                        
                        }}>Unfollow</button> 
                        : <button disabled={props.followingInProgress.some(id => id ===u.id)
                        } onClick={() => {
                           props.toggleFollowingProgress(true)
                           axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                              withCredentials: true,
                              headers: {
                                 'API-KEY': '00c9ff68-884f-4d55-9f3f-14b040cb34f7'
                              }
                           })
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                 }
                                 props.toggleFollowingProgress(false, u.id)
                              })
                           
                        }}>Follow</button> 
                     }
                  </div>
               </div>   
            )}
      </div>
   ) 
}

export default Users