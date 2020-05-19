const SEND_MESSAGE = 'SEND_MESSAGE'
const UPD_NEW_MESSAGE_TEXT = 'UPD_NEW_MESSAGE_TEXT'

let initialState = {
   dialogs: [
      { id: 1, userName: 'Sofi', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujBpByghhjIbxZ7sfH0LOHYLpTkcV9xt1-QZoAGmu_1a3LZze&usqp=CAU' },
      { id: 2, userName: 'Alex', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwbmGs-R3xoISSXMKmI5vegVxCdJPU2zJjrDxTReKtkXEPCYFn&usqp=CAU'  },
      { id: 3, userName: 'Mary', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUxTzffG3QdPxBtWkhB9AM3MPD5gvjKjmqLSthqP1El3yXDKSW&usqp=CAU' },
      { id: 4, userName: 'Filip', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUKUAMJd8TwibibcG-kHUa9carOXlQm7pTNIzcQNdhlRbLkuWF&usqp=CAU' },
      { id: 5, userName: 'Helen', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdUdSTDrqNFH8pMzajccKZYmi8mGqkM8VHtdxWlhhVv3Ii_vEF&usqp=CAU'}
   ],
   msgs: [
      { id: 1, text: 'Hello' },
      { id: 2, text: 'How are you?' },
      { id: 3, text: 'Good luck' },
      { id: 4, text: 'Hello' },
      { id: 5, text: 'Hello' }
   ],
   newMsgText: ''
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {

      case SEND_MESSAGE: {
         let newMessage = {
            id: 6,
            // id: state.dialogsPage.dialogs.msgs.lenght+1,
            text: state.newMsgText,
      }
      state.msgs.push(newMessage)
      state.newMsgText= ''
      return state
      }
      case UPD_NEW_MESSAGE_TEXT: {
         state.newMsgText = action.newText
         return state
      } 
      default:   
         return state
   }
}

export const sendMessageActionCreator = () => ({ type: 'SEND_MESSAGE'})
export const onMsgChangeActionCreator = (text) =>  ({type: 'UPD_NEW_MESSAGE_TEXT', newText: text})

export default dialogsReducer