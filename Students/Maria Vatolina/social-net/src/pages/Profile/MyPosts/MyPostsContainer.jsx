import React from 'react'
import {connect} from 'react-redux'

import { addPost, updNewPostText } from '../../../redux/reducers/profile.reducer'
import MyPosts from './MyPosts.jsx'

let mapStateToProps =(state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText 
   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       updNewPostText: (text) => {
//          dispatch(updNewPostTextActionCreator(text))
//       },
//       addPost: () => {
//          dispatch(addPostActionCreator())
//       }
//    }
// }


const MyPostsContainer = connect(mapStateToProps, {addPost, updNewPostText})(MyPosts)

export default MyPostsContainer
