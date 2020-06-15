import React from 'react'
import {connect} from 'react-redux'

import Dialogs from './Dialogs'
import { sendMessageActionCreator, 
         onMsgChangeActionCreator } from '../../redux/reducers/dialogs.reducer'


let mapStateToProps =(state) => {

   return {
      dialogsPage: state.dialogsPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updNewMessageText: (body) => {
         dispatch(onMsgChangeActionCreator(body))
      },
      sendMessage: () => {
         dispatch(sendMessageActionCreator())
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
