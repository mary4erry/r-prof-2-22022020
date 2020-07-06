// import React from 'react'
import {connect} from 'react-redux'

import { addPost } from '../../../redux/reducers/profile.reducer'
import MyPosts from './MyPosts.jsx'

let mapStateToProps =(state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText 
   }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer
