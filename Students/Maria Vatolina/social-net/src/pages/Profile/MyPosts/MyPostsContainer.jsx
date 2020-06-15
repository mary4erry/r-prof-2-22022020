import React from 'react'
import {connect} from 'react-redux'

import { addPostActionCreator, updNewPostTextActionCreator } from '../../../redux/reducers/profile.reducer'
import MyPosts from './MyPosts.jsx'

// const MyPostsContainer = (props) => {
// let state = props.store.getState()


//    let addPost = () => {
//       props.store.dispatch( addPostActionCreator() )
//    }

//    let onPostChange = (text) => {
//       // let text = newPostElement.current.value
//       let action = updNewPostTextActionCreator(text)
//       props.store.dispatch(action)
      
//    }

//    return ( <MyPosts 
//                addPost={addPost} 
//                updNewPostText={onPostChange}
//                posts={state.profilePage.posts}
//                newPostText={state.profilePage.newPostText}
//                />  )
// }
let mapStateToProps =(state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText 
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updNewPostText: (text) => {
         dispatch(updNewPostTextActionCreator(text))
      },
      addPost: () => {
         dispatch(addPostActionCreator())
      }
   }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
