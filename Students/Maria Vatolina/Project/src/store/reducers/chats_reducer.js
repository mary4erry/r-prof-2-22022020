import update  from 'react-addons-update'
// import { ADD_CHAT } from '../actions/chat_actions.js'
import { SUCCESS_CHAT_CREATE, 
        SUCCESS_CHATS_LOADING, 
        START_CHAT_CREATE, 
        ERROR_CHAT_CREATE  } from '../actions/chat_actions.js';
     

let initialStore = {
    chatRooms: {}, 
    isLoading: true,
}

export default function chatReducer(store = initialStore, action) {
    switch(action.type) {

        case SUCCESS_CHAT_CREATE: {
            let chatId = action.payload.json._id
            let title = action.payload.title

            return update(store, {
                chats: { 
                    $merge: { 
                        [chatId]: { 
                            title: title, 
                            //messagesList: []
                        } 
                    } 
                }
            });
        }
        
        case SUCCESS_CHATS_LOADING: {
            let chats = {}
            action.payload.forEach(d => {
                chats[d._id] = {title: d.title}
            })

            return update(store, {
                chats: { $set: chats }
            })
        }
        
        // case ADD_CHAT: {
        //     console.log(store.chats)
        //     // let chatId = Object.keys(store.chats).length + 1;

        //     return update(store, {
        //         chats: { 
        //             $merge: { 
        //                 [action.chatId]: {
        //                     title: action.title 
        //                     // messagesList: [] 
        //                 } 
        //             } 
        //         }
        //     });
        // }
        // case SEND_MSG: {
        //     return update(store, {
        //         chats: { 
        //             $merge: { 
        //                 [action.chatId]: {
        //                     title: store.chats[action.chatId].title,
        //                     messageList: [...store.chats[action.chatId].messageList,
        //                     action.messageId]
        //         } } },
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
        default: 
            return store
    }    
}