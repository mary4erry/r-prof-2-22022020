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
                           <img 
                              src={ u.photos.small !== null ? u.photos.small : userPhoto } 
                              className={style.photoUrl} alt=""/>
                        </NavLink>                        
                     </div>
                     <div>
                        { u.followed 
                           ? <button onClick={() => {

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
                                 })
                           
                           }}>Unfollow</button> 
                           : <button onClick={() => {
                              
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
                                 })
                              
                              }}>Follow</button> }
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