import React from 'react'
// import ReactDom from 'react-dom'

// import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import { Redirect } from 'react-router-dom'

const Profile = (props) => {
   if (!props.isAuth) return <Redirect to={'/login'}/>

   return (
      <div>
         <ProfileInfo profile={props.profile} />
         <MyPostsContainer/>
      </div>
   )
}
export default Profile
