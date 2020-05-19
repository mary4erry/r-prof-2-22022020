import React from 'react'
// import ReactDom from 'react-dom'

import Post from './Post.jsx'
import style from './MyPosts.module.css'
import { addPostActionCreator, updNewPostTextActionCreator } from '../../../redux/reducers/profile.reducer'

const MyPosts = (props) => {
   
   let postItems = props.posts.map( 
      p => <Post
               message={p.message}
               likesCount={p.likesCount}
               id={p.id} key={p.id}/>
   )

   let newPostElement = React.createRef()

   let addPost = () => {
      // props.addPost()
      props.dispatch( addPostActionCreator() )
   }

   let onPostChange = () => {
      let text = newPostElement.current.value
      // props.updNewPostText(text)
      // let action = {type: 'UPD_NEW_POST_TEXT', newText: text}
      props.dispatch(updNewPostTextActionCreator(text))
      // console.log(text);
      
   }

   return (
      <div className={style.posts_block}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea
                  onChange={onPostChange} 
                  value={props.newPostText}
                  name="post" 
                  ref={newPostElement}
                  id="new-post" 
                  cols="30" 
                  rows="2"/>
            </div>
            <div>
               <button onClick={ addPost }>Add post</button>
            </div>
         </div>
         <div className={style.post}>
            {postItems}
         </div>
      </div>
   )
}
export default MyPosts
