import update from "react-addons-update"
//import ADDONS

import { SEND_MSG, NEW_CHAT } from "../actions/messages_action"

const iniialStore = {
   messages: {
      1: {
         1: { user: 'Anna', text: "Приветствую! Предлагаем к использованию наш новый продукт" },
         2: { user: 'Me', text: "Спасибо" },
      },
      2: {
         1: { user: 'Bot', text: "Здравствуйте! Чем могу помочь?" },
         2: { user: 'Me', text: "Здравствуйте! Приложение не работает" },
         3: { user: 'bot', text: "Мы изучим вашу проблему и ответим позже, ожидайте" },
      },
      3: {
         1: { user: 'Dart Vader', text: "You don't know the power of the Dark Side" },
         2: { user: 'Luke', text: "Oh, father..." },
      }  
   }, 
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
      default: 
         return store
   }
}