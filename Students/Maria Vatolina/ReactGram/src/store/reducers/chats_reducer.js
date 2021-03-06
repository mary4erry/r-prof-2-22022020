import update from "react-addons-update"

//import ADDONS
import { SUCCESS_MESSAGES_LOADING,
         SUCCESS_MESSAGE_SENDING } from '../actions/messages_action.js'
import { START_CHATS_LOADING,
         ERROR_CHATS_LOADING,
         SUCCESS_CHATS_LOADING, 
         SUCCESS_CHAT_CREATING, 
         SUCCESS_CHAT_DELETING } from '../actions/chats_action.js'

const initialStore = {
   chats: {},
   isLoading: false,
}

export default function chatReducer ( store = initialStore, action) {
   switch (action.type) {
      case START_CHATS_LOADING: {
         return update(store, {
            isLoading: { $set: true },
         });
      }
      case SUCCESS_CHATS_LOADING: {
         const chats = {}
         action.payload.forEach(chat => {
            const { _id, title, messageList } = chat
            chats[_id] = { title, messageList }
         })
         return update(store, {
            chats: { $set: chats },
         })
      }
      case SUCCESS_MESSAGES_LOADING: {
         const chats = {...store.chats}
         action.payload.forEach(msg => {
            chats[msg.chatId].messageList.push(msg)
         })
         return update(store, {
            chats: { $set: chats },
            isLoading: { $set: false }
         })
      }
      case ERROR_CHATS_LOADING: {
         return update(store, {
            isLoading: { $set: false },
         })
      }
      case SUCCESS_CHAT_CREATING: {
         const { _id, title, messageList } = action.payload
         return update(store, {
            chats: {
               $merge: { [_id]: { title, messageList } }
            }
         })
      }
      case SUCCESS_CHAT_DELETING: {
         const chats = {...store.chats}
         delete chats[action.payload._id]
         
         return update(store, {
            chats: { $set: chats }
         })
      }
      case SUCCESS_MESSAGE_SENDING: {
         const { chatId } = action.payload
         return update(store, {
            chats: {
               $merge: { [chatId]: { title: store.chats[chatId].title, 
                  messageList: [...store.chats[chatId].messageList, action.payload] } }
            }
         })
      }
      default: 
         return store
   }
}