const ADD_POST = 'ADD_POST'
const UPD_NEW_POST_TEXT = 'UPD_NEW_POST_TEXT'

let initialState = {
   posts: [
      { id: 1, message: 'My first post ', likesCount: 5 },
      { id: 2, message: 'Story ', likesCount: 25 },
      { id: 3, message: 'About javaScript ', likesCount: 3 },
      { id: 4, message: 'Learn React', likesCount: 234 },
   ],
   newPostText: ''
}

const profileReducer = (state = initialState, action) => {
   
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         }
         state.posts.push(newPost)
         state.newPostText = ''
         return state
      }
      case UPD_NEW_POST_TEXT: {
         state.newPostText = action.newText
         return state
      }
      default:   
         return state
   }
}

export const addPostActionCreator = () => ({ type: 'ADD_POST'})
export const updNewPostTextActionCreator = (text) =>  ({type: 'UPD_NEW_POST_TEXT', newText: text})

export default profileReducer
