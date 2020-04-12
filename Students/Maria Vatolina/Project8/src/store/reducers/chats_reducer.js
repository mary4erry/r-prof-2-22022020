import update  from 'react-addons-update'
//Actions
import { SUCCESS_CHAT_CREATE, SUCCESS_CHATS_LOADING, START_CHAT_CREATE, ERROR_CHAT_CREATE } from '../actions/chat_actions.js'
// import {  } from '../actions/messages_actions.js'

let initialStore = {
    chatRooms: {},
    sLoading: true,
}

export default function chatReducer(store = initialStore, action) {
    switch(action.type) {
        case SUCCESS_CHATS_LOADING: {
            let dto = action.payload
            let chatRooms = {}

            dto.forEach(chat => {
                const { _id, title, messageList } = chat
                chatRooms[_id] = { title, messageList }
            });
            return update(store, {
                chatRooms: { $set: chatRooms }
            });
        }

        case SUCCESS_CHAT_CREATE: {
            let chatId = action.payload.json._id
            let title = action.payload.title
            
            return update(store, {
                chatRooms: { 
                    $merge: { 
                        [chatId]: {
                            title: title
                        } 
                    }
                }
            });
        }

        

        // case SEND_MSG: {
        //     console.log('store.messages:',store.messages)
        //     return update(store, {
        //         messages: { 
        //             [action.chatId]: {
        //                 $merge: { 
        //                     [action.messageId]: {
        //                         user: action.sender, 
        //                         text: action.text, 
        //                         chatId: action.chatId 
        //                     } 
        //                 } 
        //             }
        //         }
        //     });
        // } 
        // case SUCCESS_MESSAGES_LOADING: {
        //     const chats = {...store.chats};
        //     action.payload.forEach(msg => {
        //         const { id, chatId } = msg;
        //         chats[chatId].messageList.push(id);
        //     });
        //     return update(store, {
        //         chats: { $set: chats },
        //         isLoading: { $set: false },
        //     })
        // }
        // case ADD_CHAT: {
        //     console.log(store.chats)
        //     // let chatId = Object.keys(store.chats).length + 1;

        //     return update(store, {
        //         chats: { 
        //             $merge: { 
        //                 [action.chatId]: {
        //                     title: action.title 
        //                 } 
        //             } 
        //         }
        //     });
        // }
        default: 
            return store
    }    
}