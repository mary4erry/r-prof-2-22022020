import update  from 'react-addons-update'
import { SEND_MSG,
        START_MESSAGES_LOADING,
        SUCCESS_MESSAGES_LOADING,
        ERROR_MESSAGES_LOADING,
        START_MESSAGE_SEND,
        SUCCESS_MESSAGE_SEND,
        ERROR_MESSAGE_SEND
        } from '../actions/messages_actions.js'

const initialStore = {
    messages: []
        // 1: {
        //     1: { user: 'Support', text: 'Describe your problem'},
        //     2: { user: 'Me', text: 'The program is not working!'},
        //     3: { user: 'Support', text: 'Have you tried turning it off and on again?' },
        //     4: { user: 'Me', text: 'It does not work anyway'}
        // },
        // 2: {
        //     1: { user: 'Darth Vader', text: 'Halo'},
        //     2: { user: null, text: null},
        //     3: { user: 'Darth Vader', text: 'I am your father' },
        //     4: { user: null, text: 'NOOOOOOOOO' }
        // },
        // 3: {
        //     1: { user: 'Friend', text: 'Hi! How you doing'},
        //     2: { user: 'Me', text: 'ok'}
        // }
    ,
    isLoading: false,
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        // case SEND_MSG: {
        //     console.log('store.messages:',store.messages)
        //     return update(store, {
        //         messages: { 
        //             [action.chatId]: {
        //                 $merge: { 
        //                     [action.messageId]: {
        //                         user: action.sender, 
        //                         text: action.text 
        //                     } 
        //                 } 
        //             }
        //         }
        //     });
        // }
        case START_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_MESSAGES_LOADING: {
            // const messages = {};
            // action.payload.forEach(msg => {
            //     const { text, sender } = msg;
            //     messages[msg.id] = { text, sender };
            // });
            return update(store, {
                messages: { $set: action.payload },
                isLoading: { $set: false },
            });
        }
        case ERROR_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        case SUCCESS_MESSAGE_SEND: {
            if (action.payload.status) {
                let arr = store.messages
                console.log('message_reducer', action);
                
            }
            // if (action.payload._id) {
            //     let msg = action.payload.msg
            //     msg._id = action.payload._id
            //     return update(store, {
            //         messages: { $push: [msg] }
            //     })
            // }
        }
        default: return store;
    }
}