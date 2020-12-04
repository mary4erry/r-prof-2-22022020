export let SEND_MSG = '@@messages/SEND_MSG'

export let sendMessage = (chatId, messageId, sender=null, text) => ({
   type: SEND_MSG,
   chatId: chatId,
   messageId: messageId,
   sender: sender,
   text: text
})

export const NEW_CHAT = '@@messages/NEW_CHAT'

export let addChatToStore = (chatId) => ({
   type: NEW_CHAT,
   chatId: chatId
})