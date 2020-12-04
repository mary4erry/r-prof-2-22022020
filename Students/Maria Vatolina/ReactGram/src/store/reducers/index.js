import { combineReducers } from "redux"
import msgReducer from './messages_reducer'
import chatReducer from './chats_reducer'

export default combineReducers({ msgReducer, chatReducer })

