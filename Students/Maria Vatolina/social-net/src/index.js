
// import './index.css'
// import state from './redux/state.js'

import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App.jsx'
import {addPost, updNewPostText, sendMessage, updNewMessageText} from './redux/state.js'
import { Route, BrowserRouter } from 'react-router-dom'
import store from './redux/state.js'

let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <App 
            // store={store}
            state={state} 
            dispatch={store.dispatch.bind(store)} 
            // updNewPostText={store.updNewPostText.bind(store)}
            // sendMessage={store.sendMessage.bind(store)}
            // updNewMessageText={store.updNewMessageText.bind(store)}
            />
      </BrowserRouter>,
         document.getElementById('root')
   )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
