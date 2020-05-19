import React from 'react'
// import ReactDom from 'react-dom'

// import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
   
   return (
      <div>
         <ProfileInfo />
         <MyPosts 
            posts={props.profilePage.posts}
            dispatch={props.dispatch}
            // updNewPostText={props.updNewPostText}
            newPostText={props.profilePage.newPostText} />
      </div>
   )
}
export default Profile
