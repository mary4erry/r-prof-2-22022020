import update from "react-addons-update"

//import ADDONS
import { ADD_CHAT } from "../actions/chats_action"

const iniialStore = {
   chats: {
      1: {title: 'Anna' },
      2: {title: 'HelpBot' },
      3: {title: 'Dart Vader' },
   }
}

export default function chatReducer ( store = iniialStore, action) {
   switch (action.type) {
      case ADD_CHAT: {
         return update (store, {
            chats: { 
               $merge: { [action.chatId]: { title: action.title } } 
            }
         })
      }
      default: 
         return store
   }
}