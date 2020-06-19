const SET_USER_DATA = 'SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
   userId: null,
   email: null,
   login: null,
   isLoading: false,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      }

      default:   
         return state
   }
}


export const setAuthUserData = (userId, email, login) =>  ({type: 'SET_USER_DATA', data: {userId, email, login}})
export const toggleIsLoading = (isLoading) =>  ({type: 'TOGGLE_IS_LOADING', isLoading})


export default authReducer
