import React from 'react'
// import ReactDom from 'react-dom'

import Header from './Header'
import { connect } from 'react-redux'
import {setAuthUserData} from '../../redux/reducers/auth.reducer'
import { usersAPI } from '../../API/api'


class HeaderContainer extends React.Component  {
   componentDidMount() {
      usersAPI.logIn()
         .then(data => {
            if (data.resultCode === 0) {
               let {id, login, email} = data.data
               this.props.setAuthUserData(id, email, login)
            }
         })
   }
   render() {
      return <Header {...this.props}/>
   }

   
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,

})
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)
