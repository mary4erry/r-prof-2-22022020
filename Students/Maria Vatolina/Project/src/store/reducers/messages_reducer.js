import update  from 'react-addons-update'
import { START_MESSAGES_LOADING,
        SUCCESS_MESSAGES_LOADING,
        SUCCESS_MESSAGE_SEND,
        } from '../actions/messages_actions.js'

const initialStore = {
    messages: {},
    isLoading: false,
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case START_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_MESSAGES_LOADING: {
            const messages = {};
            action.payload.forEach(msg => {
                const { _id, chatId, sender, text } = msg;
                messages[_id] = { chatId, sender, text };
            });
            return update(store, {
                messages: { $set: messages },
                isLoading: { $set: false },
            });
            // return update(store, {
            //     messages: { $set: action.payload }
            // })
        }
        // case ERROR_MESSAGES_LOADING: {
        //     return update(store, {
        //         isLoading: { $set: false },
        //     });
        // }
        case SUCCESS_MESSAGE_SEND: {
            // if (action.payload._id) {
            //     let msg = action.payload.msg
            //     msg._id = action.payload._id
            //     return update(store, {
            //         messages: { $push: [msg] }
            //     })
            // }
            const { _id, chatId, sender, text } = action.payload
            return update(store, {
                messages: { 
                    $push: { [_id]: { chatId, sender, text } } 
                }
            })
        }
        default: 
        return store;
    }
}