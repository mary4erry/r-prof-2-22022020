import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import msgReducer from './messages_reducer'
import chatReducer from './chats_reducer'

export default history => combineReducers({ 
   router: connectRouter(history),
   msgReducer, 
   chatReducer 
})

