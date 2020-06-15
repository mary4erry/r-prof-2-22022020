import React from 'react'
// import ReactDom from 'react-dom'

import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
   return (
      <div>
         <div className={style.bgPhoto}>
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTueDqN7PI3oDcOWB2Y-RB-7CViMGHY9WurWemhCStStiFAhtVv&usqp=CAU"
               alt=""
            />
         </div>
         <div className={style.description}>ava + description</div>
      </div>
   )
}
export default ProfileInfo
