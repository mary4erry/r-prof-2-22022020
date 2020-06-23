import React from 'react'
// import ReactDom from 'react-dom'

import Header from './Header'
import { connect } from 'react-redux'
import {getAuthUserData} from '../../redux/reducers/auth.reducer'


class HeaderContainer extends React.Component  {
   componentDidMount() {
      this.props.getAuthUserData(this.props.id, this.props.login, this.props.email)
   }
   render() {
      return <Header {...this.props}/>
   }

   
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,

})
export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer)
