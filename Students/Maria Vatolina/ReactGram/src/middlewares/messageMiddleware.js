import { SUCCESS_MESSAGE_SENDING, SEND_MSG, sendMessage } from "../store/actions/messages_action"

export default store => next => (action) => {
   switch (action.type) {
      case SUCCESS_MESSAGE_SENDING:
         if (action.payload.sender === 'Me') {
            setTimeout(() => {
               store.dispatch(
                  sendMessage(
                     action.chatId, 
                     Object.keys(store.getState().msgReducer.messages[action.chatId]).length + 1,
                     'Bot', 
                     'ask me later...' ))
            }, 500)
         }
   }
   return next(action)
}