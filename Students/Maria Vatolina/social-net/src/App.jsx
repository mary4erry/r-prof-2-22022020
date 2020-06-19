import React from 'react'
import { Route } from 'react-router-dom'

// components
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import DialogsContainer from './pages/Dialogs/DialogsContainer'
import UsersContainer from './pages/Users/UsersContainer.jsx'

import style from './App.module.css'
import ProfileContainer from './pages/Profile/ProfileContainer.jsx'
import HeaderContainer from './components/Header/HeaderContainer.jsx'

const App = (props) => {
   
   return (
      <div className={style.container}>
         <div className={style.appWrapper}>
            <HeaderContainer />
            <Navbar state={props.store}/>
            <div className={style.app_wrapper_content}>

               <Route path="/dialogs" 
                  render={() => <DialogsContainer />}
               />
               <Route path="/profile/:userId?" 
                  render={() => <ProfileContainer />}
               />
               <Route path="/users"
                  render={() => <UsersContainer /> }
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
