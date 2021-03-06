import { RSAA, getJSON } from 'redux-api-middleware'

export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING'
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING'
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING'

export const START_MESSAGE_SENDING = '@@messages/START_MESSAGE_SENDING'
export const SUCCESS_MESSAGE_SENDING = '@@messages/SUCCESS_MESSAGE_SENDING'
export const ERROR_MESSAGE_SENDING = '@@messages/ERROR_MESSAGE_SENDING'

export const sendMessage = (chatId, sender, text) => ({
   [RSAA]: {
      endpoint: '/api/message',                       
      method: 'POST',       // it works with Database only
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({chatId, sender, text}),
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

export const NEW_CHAT = '@@messages/NEW_CHAT'

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