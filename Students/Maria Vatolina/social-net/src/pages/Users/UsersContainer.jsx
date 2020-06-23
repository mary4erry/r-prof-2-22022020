import React from 'react'
import Users from './Users.jsx'
import Loader from '../../controls/Loader/Loader.jsx'
import { connect } from 'react-redux'
import { follow, unfollow, 
         setCurrentPage,
         toggleFollowingProgress, 
         getUsers} from '../../redux/reducers/users.reducer'

class UsersContainer extends React.Component {
   componentDidMount () {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.getUsers(pageNumber, this.props.pageSize)
   }

   render () {

      return <>
               {this.props.isLoading ? <Loader /> : null}
               <Users 
                  currentPage= {this.props.currentPage}
                  totalUsersCount= {this.props.totalUsersCount}
                  pageSize= {this.props.pageSize}
                  onPageChanged= {this.onPageChanged}
                  users= {this.props.users}
                  unfollow= {this.props.unfollow}
                  follow= {this.props.follow}
                  followingInProgress={this.props.followingInProgress}
               /> 
            </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading,
      followingInProgress: state.usersPage.followingInProgress,
   }
}

export default connect (mapStateToProps, 
   { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }) (UsersContainer)