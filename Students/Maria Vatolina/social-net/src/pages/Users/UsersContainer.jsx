import React from 'react'
import Users from './Users.jsx'
import Loader from '../../controls/Loader/Loader.jsx'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, 
         setCurrentPageAC, 
         setTotalUsersCountAC, 
         toggleIsLoadingAC} from '../../redux/reducers/users.reducer'

class UsersContainer extends React.Component {

   componentDidMount () {
      this.props.toggleIsLoading(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsLoading(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(response.data.items)
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
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      },
      toggleIsLoading: (isLoading) => {
         dispatch(toggleIsLoadingAC(isLoading))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)