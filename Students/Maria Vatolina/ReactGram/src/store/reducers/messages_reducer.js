import update from "react-addons-update"
//import ADDONS

import { SEND_MSG } from "../actions/messages_action"

const iniialStore = {
   messages: {
         1: { user: 'Me', text: 'Hello' },
         2: { user: null, text: null },
         3: { user: 'Me', text: 'How are you?' },
         4: { user: null, text: 'lol' },
   }
}

export default function msgReducer( store = iniialStore, action) {
   switch (action.type) {
      case SEND_MSG: {
         console.log(store.messages);
         return update(store, {
            messages: { $merge: { [action. messageId]: { user: action.sender, text: action.text } } }
         })
      }
      default: 
         return store
   }
}