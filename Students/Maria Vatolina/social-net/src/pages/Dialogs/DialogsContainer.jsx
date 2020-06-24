import React from 'react'
import {connect} from 'react-redux'

import Dialogs from './Dialogs'
import { sendMessage, 
   updNewMessageText } from '../../redux/reducers/dialogs.reducer'
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect'

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
}

const DialogsContainer = connect(mapStateToProps, { updNewMessageText, sendMessage})(AuthRedirectComponent)

export default DialogsContainer
