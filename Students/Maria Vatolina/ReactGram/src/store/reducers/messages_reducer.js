import update from "react-addons-update"

import { SEND_MSG, NEW_CHAT,
   START_MESSAGES_LOADING,
   SUCCESS_MESSAGES_LOADING,
   ERROR_MESSAGES_LOADING } from "../actions/messages_action"

const iniialStore = {
   isLoading: false,
   messages: { }, 
}

export default function msgReducer( store = iniialStore, action) {
   switch (action.type) {
      case SEND_MSG: {
         console.log(store.messages);
         return update(store, {
            messages: { [action.chatId]: {
               $merge: { [action.messageId]: { user: action.sender, text: action.text } 
               }
            } }
         })
      }
      case NEW_CHAT: {
         return update(store, {
            messages: {
               $merge: { [action.chatId]: {  } }
            }
         })
      }
      case START_MESSAGES_LOADING: {
         return update(store, {
            isLoading: { $set: true },
         });
      }
      case SUCCESS_MESSAGES_LOADING: {
         const messages = {};

         action.payload.forEach(msg => {
            const { _id, text, sender, chatId } = msg;
            messages[msg._id] = { sender, text, chatId };
         })
         return update(store, {
            messages: { $set: messages },
            isLoading: { $set: false },
         })
      }
      case ERROR_MESSAGES_LOADING: {
         return update(store, {
            isLoading: { $set: false },
         })
      }
      default: 
         return store
   }
}