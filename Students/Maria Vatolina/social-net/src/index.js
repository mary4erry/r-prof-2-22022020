
// import './index.css'
// import state from './redux/state.js'

import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App.jsx'
import state, { subscribe } from './redux/state.js'
import {addPost, updNewPostText, sendMessage, updNewMessageText} from './redux/state.js'
import { Route, BrowserRouter } from 'react-router-dom'


let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <App 
            state={state} 
            addPost={addPost} 
            updNewPostText={updNewPostText}
            sendMessage={sendMessage}
            updNewMessageText={updNewMessageText}
            />
      </BrowserRouter>,
         document.getElementById('root')
   )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
