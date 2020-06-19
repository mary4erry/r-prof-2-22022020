import React from 'react'
// import ReactDom from 'react-dom'

import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {setAuthUserData} from '../../redux/reducers/auth.reducer'


class HeaderContainer extends React.Component  {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then(response => {
            if (response.data.resultCode === 0) {
               let {id, login, email} = response.data.data
               this.props.setAuthUserData(id, email, login)
            }
         })
         // .then (response => {
         //    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ response.data.data.id)
         //    .then(response => {
         //       this.props.setUserProfile(response.data)
         // })
         // } )
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
