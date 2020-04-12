import update  from 'react-addons-update'
import { 
        START_MESSAGES_LOADING,
        SUCCESS_MESSAGES_LOADING,
        ERROR_MESSAGES_LOADING,
        START_MESSAGE_SEND,
        SUCCESS_MESSAGE_SEND,
        ERROR_MESSAGE_SEND
    } from '../actions/messages_actions.js'

const initialStore = {
    messages: {},
    isLoading: false,
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_MESSAGES_LOADING: {
            const messages = {}
            action.payload.forEach(msg => {
                const { _id, sender, text, chatId } = msg
                messages[_id] = { sender, text, chatId }
            })
            return update(store, {
                messages: { $set: messages },
                isLoading: { $set: false },
            });
        }
        // case ERROR_MESSAGES_LOADING: {
        //     return update(store, {
        //         isLoading: { $set: false },
        //     });
        // }
        case SUCCESS_MESSAGE_SEND: {
            const { _id, sender, text, chatId } = action.payload
            return update(store, {
                messages: { 
                $merge: { [_id]: { sender, text, chatId } } 
                // РАЗНЫЕ ID ПОФИКСИТЬ
                }
            })
        }
        default: 
            return store;
    }
} 