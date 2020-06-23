import React from 'react'
import {connect} from 'react-redux'

import Dialogs from './Dialogs'
import { sendMessage, 
   updNewMessageText } from '../../redux/reducers/dialogs.reducer'


let mapStateToProps =(state) => {
   return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth
   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       updNewMessageText: (body) => {
//          dispatch(onMsgChangeActionCreator(body))
//       },
//       sendMessage: () => {
//          dispatch(sendMessageActionCreator())
//       }
//    }
// }

const DialogsContainer = connect(mapStateToProps, { updNewMessageText, sendMessage})(Dialogs)

export default DialogsContainer
