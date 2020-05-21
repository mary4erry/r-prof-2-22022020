import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"; 
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store.js'

//components
import App from './App.jsx'

// let rerenderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
           <App 
               // state={state} 
               // dispatch={store.dispatch.bind(store)} 
               // updNewPostText={store.updNewPostText.bind(store)}
               // sendMessage={store.sendMessage.bind(store)}
               // updNewMessageText={store.updNewMessageText.bind(store)}
            />
        </Provider>
      </BrowserRouter>, document.getElementById('root')
   )
// }

// rerenderEntireTree()

// store.subscribe(() => {
//    // let state = store.getState()
//    rerenderEntireTree()
// })
