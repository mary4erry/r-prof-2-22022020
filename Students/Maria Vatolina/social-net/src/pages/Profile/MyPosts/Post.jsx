import React from 'react'
// import ReactDom from 'react-dom'

import style from './Post.module.css'

const Post = (props) => {
   return (
      <div className={style.item}>
         <img
            width="50px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU"
            alt=""
         />
         <div className={style.item_body}>
            <div>{props.message}</div>
         <div>
            <span>likes {props.likesCount}</span>
         </div>
         </div>
         
      </div>
   )
}
export default Post
