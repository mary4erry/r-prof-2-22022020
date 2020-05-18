import React from 'react'

import style from './App.module.css'

import { Route } from 'react-router-dom'

import Profile from './components/Profile/Profile.jsx'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'

const App = (props) => {
   
   return (
      <div className={style.container}>
         <div className={style.appWrapper}>
            <Header />
            <Navbar state={props.state.navbar}/>
            <div className={style.app_wrapper_content}>

               <Route path="/dialogs" 
                  render={() => <Dialogs 
                     state={props.state.dialogsPage}
                     sendMessage={props.sendMessage}
                     updNewMessageText={props.updNewMessageText}
                  />}
               />
               <Route path="/profile" 
                  render={() => <Profile 
                     profilePage={props.state.profilePage}
                     addPost={props.addPost}
                     updNewPostText={props.updNewPostText}
                  />} 
               />
               {/* <Route path="/news" component={Profile} />
               <Route path="/music" component={Profile} />
               <Route path="/settings" component={Profile} /> */}
            </div>
         </div>
      </div>
         
   )
}

export default App
