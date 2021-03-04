import { RSAA, getJSON } from 'redux-api-middleware';
export const SEND_MSG = '@@messages/SEND_MSG'
export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';

export let START_MESSAGE_SENDING = '@@messages/START_MESSAGE_SENDING'
export let SUCCESS_MESSAGE_SENDING = '@@messages/SUCCESS_MESSAGE_SENDING'
export let ERROR_MESSAGE_SENDING = '@@messages/ERROR_MESSAGE_SENDING'

export let sendMessage = (sender, text, chatId) => ({
   [RSAA]: {
      endpoint: '/api/message',                       
      method: 'POST',                              // it works with Database only
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({sender, text, chatId}),
      types: [
         START_MESSAGE_SENDING,
         {
            type: SUCCESS_MESSAGE_SENDING,
            payload: (action, state, res) => getJSON(res).then(json => json)
         },
         ERROR_MESSAGE_SENDING
      ]
   }
})

// export let sendMessage = (chatId, messageId, sender=null, text) => ({
//    type: SEND_MSG,
//    chatId: chatId,
//    messageId: messageId,
//    sender: sender,
//    text: text
// })

export const NEW_CHAT = '@@messages/NEW_CHAT'

// export let addChatToStore = (chatId) => ({
//    type: NEW_CHAT,
//    chatId: chatId
// })

export const loadMessages = () => ({
   [RSAA]: {
      // endpoint: '/static-api/messages.json',
      endpoint: ' api/messages',
      method: 'GET',
      types: [
         START_MESSAGES_LOADING,
         {  
            type: SUCCESS_MESSAGES_LOADING,
            payload: (action, state, res) => getJSON(res).then(
            json => json,
            ),
         },
         ERROR_MESSAGES_LOADING,
      ],
   },
})