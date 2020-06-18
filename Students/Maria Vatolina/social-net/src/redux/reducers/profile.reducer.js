const ADD_POST = 'ADD_POST'
const UPD_NEW_POST_TEXT = 'UPD_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
   posts: [
      { id: 1, message: 'My first post ', likesCount: 5 },
      { id: 2, message: 'Story ', likesCount: 25 },
      { id: 3, message: 'About javaScript ', likesCount: 3 },
      { id: 4, message: 'Learn React', likesCount: 234 },
   ],
   newPostText: 'write please',
   profile: null,
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPD_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         }
      }
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      }
      case SET_USER_PROFILE: {
         return{ ...state, profile: action.profile}
      }
      
      default:   
         return state
   }
}

export const addPostActionCreator = () => ({ type: 'ADD_POST'})
export const updNewPostTextActionCreator = (text) =>  ({type: 'UPD_NEW_POST_TEXT', newText: text})
export const setUserProfile = (profile) =>  ({type: 'SET_USER_PROFILE', profile})

export default profileReducer
