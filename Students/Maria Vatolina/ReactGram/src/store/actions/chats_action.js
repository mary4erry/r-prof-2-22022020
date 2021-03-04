import { RSAA, getJSON } from 'redux-api-middleware';

// export let ADD_CHAT = '@@chat/ADD_CHAT'

export const START_CHAT_CREATING = '@@chat/START_CHAT_CREATING'
export const SUCCESS_CHAT_CREATING = '@@chat/SUCCESS_CHAT_CREATING'
export const ERROR_CHAT_CREATING = '@@chat/ERROR_CHAT_CREATING'

// export let addChat = (chatId, title) => ({
//    type: ADD_CHAT,
//    chatId: chatId,
//    title: title
// })
export const addChat = (title) => ({
   [RSAA]: {
      endpoint: '/api/chat',                       
      method: 'POST',                              // it works with Database only
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({title}),
      types: [
         START_CHAT_CREATING,
         {
            type: SUCCESS_CHAT_CREATING,
            payload: (action, state, res) => getJSON(res).then(json => json)
         },
         ERROR_CHAT_CREATING
      ]
   }
})

export const START_CHATS_LOADING = '@@chat/START_CHATS_LOADING'
export const SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING'
export const ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING'

export const loadСhats = () => ({
   [RSAA]: {
      // endpoint: '/static-api/messages.json',
      endpoint: ' api/chats',
      method: 'GET',
      types: [
         START_CHATS_LOADING,
         {  
            type: SUCCESS_CHATS_LOADING,
            payload: (action, state, res) => getJSON(res).then(
            json => json,
            ),
         },
         ERROR_CHATS_LOADING,
      ],
   },
})
