import React from 'react'
import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import {getUserProfile} from '../../redux/reducers/profile.reducer'
import { withRouter } from 'react-router-dom'
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect.js'
import { compose } from 'redux'


class ProfileContainer extends React.Component {
   componentDidMount () {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 2
      }
      this.props.getUserProfile(userId)
   }

   render () {
      return (
         <div>
            <Profile {...this.props} profile={this.props.profile} />
         </div>
      )
   }  
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
})

export default compose(
   connect( mapStateToProps, { getUserProfile }),
   withRouter,
   WithAuthRedirect
)(ProfileContainer)
