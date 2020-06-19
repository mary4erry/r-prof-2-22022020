import React from 'react'
import Users from './Users.jsx'
import Loader from '../../controls/Loader/Loader.jsx'
import  { usersAPI }  from '../../../src/API/api.js';
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, 
         setCurrentPage, 
         setTotalUsersCount, 
         toggleIsLoading} from '../../redux/reducers/users.reducer'

class UsersContainer extends React.Component {

   componentDidMount () {
      this.props.toggleIsLoading(true)

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsLoading(true)

      usersAPI.getUsers(pageNumber, this.props.pageSize)
         .then(data => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(data.items)
         })
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
   }
}
// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: followAC,
//       unfollow: unfollowAC,
//       setUsers: setUsersAC,
//       setCurrentPage: setCurrentPageAC,
//       setTotalUsersCount: setTotalUsersCountAC,
//       toggleIsLoading: toggleIsLoadingAC,
//    }
// }
export default connect (mapStateToProps,  {
   follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading
}) (UsersContainer)