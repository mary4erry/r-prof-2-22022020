import update from "react-addons-update"

import { SUCCESS_MESSAGE_SENDING,
   START_MESSAGES_LOADING,
   SUCCESS_MESSAGES_LOADING,
   ERROR_MESSAGES_LOADING } from "../actions/messages_action"

const initialStore = {
   isLoading: false,
   messages: { }, 
}

export default function msgReducer( store = initialStore, action) {
   switch (action.type) {
      case SUCCESS_MESSAGE_SENDING: {
         const { _id, sender, text, chatId } = action.payload
         return update(store, {
            messages: { 
               $merge: { [_id]: { text, sender, chatId } } 
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
            messages[_id] = { sender, text, chatId };
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