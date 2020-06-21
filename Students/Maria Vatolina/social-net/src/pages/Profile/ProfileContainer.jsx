import React from 'react'
import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import {setUserProfile} from '../../redux/reducers/profile.reducer'
import { withRouter } from 'react-router-dom'
import { usersAPI } from '../../API/api.js'

class ProfileContainer extends React.Component {
   componentDidMount () {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 2
      }
      usersAPI.chooseUser(userId)
         .then(data => { 
            this.props.setUserProfile(data)
         })
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
   profile: state.profilePage.profile
})

let whithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect( mapStateToProps, { setUserProfile } ) (whithUrlDataContainerComponent)
