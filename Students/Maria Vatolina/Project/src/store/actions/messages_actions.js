import { RSAA, getJSON } from 'redux-api-middleware';

export const START_MESSAGE_SEND = '@@message/START_MESSAGE_SEND';
export const SUCCESS_MESSAGE_SEND = '@@message/SUCCESS_MESSAGE_SEND';
export const ERROR_MESSAGE_SEND = '@@message/ERROR_MESSAGE_SEND';

export let sendMessage = ( sender, text, chatId) => ({
    [RSAA]: {
        endpoint: '/api/message',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({sender, text, chatId}),
        types: [
                START_MESSAGE_SEND,
                {
                    type: SUCCESS_MESSAGE_SEND,
                    payload: (action, state, res) => getJSON(res)
                                 .then(json => {
                                    return json
                                    // return {json, msg: {chatId, sender, text}} //Status
                                }),
                },
                ERROR_MESSAGE_SEND,
            ],
        },
})

export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';

export const loadMessages = () => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then( json => {
                        return json }), //DTO
            },
            ERROR_MESSAGES_LOADING,
        ],
    },
});
