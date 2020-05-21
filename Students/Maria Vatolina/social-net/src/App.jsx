import React from 'react'
import { Route } from 'react-router-dom'

// components
import Profile from './components/Profile/Profile.jsx'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer'

import style from './App.module.css'

const App = (props) => {
   
   return (
      <div className={style.container}>
         <div className={style.appWrapper}>
            <Header />
            <Navbar state={props.store}/>
            <div className={style.app_wrapper_content}>

               <Route path="/dialogs" 
                  render={() => <DialogsContainer
                     store={props.store} 
                     // state={props.state.dialogsPage}
                     // dispatch={props.dispatch}
                     // updNewMessageText={props.updNewMessageText}
                  />}
               />
               <Route path="/profile" 
                  render={() => <Profile 
                     store={props.store} 
                     // profilePage={props.state.profilePage}
                     // dispatch={props.dispatch}
                     // updNewPostText={props.updNewPostText}
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
