import React from 'react'
import style from './User.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/userpic.png'

class Users extends React.Component {

   componentDidMount () {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }


   render () {

      let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
      let pages = []
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i)  
      }

      return  <div className={style.wrap}>
         <div>
         { pages.map( p => 
            <span 
               className={this.props.currentPage === p ? style.selectedPage : undefined} key={p}
               onClick={() => { this.onPageChanged(p)}}>{p}
            </span>
         )}
         </div>
            { this.props.users.map( u => <div key={ u.id }>
               <span>
                  <div>
                     <img src={ u.photos.small !== null ? u.photos.small : userPhoto } className={style.photoUrl} alt=""/>
                  </div>
                  <div>
                     { u.followed 
                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button> }
                     
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
}

export default Users