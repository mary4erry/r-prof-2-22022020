

let rerenderEntireTree = () => {   
}

let state = {
   profilePage: {
      posts: [
         { id: 1, message: 'My first post ', likesCount: 5 },
         { id: 2, message: 'Story ', likesCount: 25 },
         { id: 3, message: 'About javaScript ', likesCount: 3 },
         { id: 4, message: 'Learn React', likesCount: 234 },
      ],
      newPostText: ''
   },
   dialogsPage: {
      dialogs: [
         { id: 1, userName: 'Sofi', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujBpByghhjIbxZ7sfH0LOHYLpTkcV9xt1-QZoAGmu_1a3LZze&usqp=CAU' },
         { id: 2, userName: 'Alex', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwbmGs-R3xoISSXMKmI5vegVxCdJPU2zJjrDxTReKtkXEPCYFn&usqp=CAU'  },
         { id: 3, userName: 'Mary', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUxTzffG3QdPxBtWkhB9AM3MPD5gvjKjmqLSthqP1El3yXDKSW&usqp=CAU' },
         { id: 4, userName: 'Filip', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUKUAMJd8TwibibcG-kHUa9carOXlQm7pTNIzcQNdhlRbLkuWF&usqp=CAU' },
         { id: 5, userName: 'Helen', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdUdSTDrqNFH8pMzajccKZYmi8mGqkM8VHtdxWlhhVv3Ii_vEF&usqp=CAU'}
      ],
      msgs: [
         { id: 1, text: 'Hello' },
         { id: 2, text: 'How are you?' },
         { id: 3, text: 'Good luck' },
         { id: 4, text: 'Hello' },
         { id: 5, text: 'Hello' }
      ],
      newMsgText: ''
   },
   navbar: {
      friends: [
         { id: 1, userName: 'Sofi', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQujBpByghhjIbxZ7sfH0LOHYLpTkcV9xt1-QZoAGmu_1a3LZze&usqp=CAU' },
         { id: 2, userName: 'Alex', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwbmGs-R3xoISSXMKmI5vegVxCdJPU2zJjrDxTReKtkXEPCYFn&usqp=CAU'  },
         { id: 3, userName: 'Mary', userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUxTzffG3QdPxBtWkhB9AM3MPD5gvjKjmqLSthqP1El3yXDKSW&usqp=CAU' }
      ]
      
   }
}

export const sendMessage = () => {
   let newMessage = {
      id: 6,
      // id: state.dialogsPage.dialogs.msgs.lenght+1,
      text: state.dialogsPage.newMsgText,
   }
   state.dialogsPage.msgs.push(newMessage)
   state.dialogsPage.newMsgText= ''
   rerenderEntireTree(state)
}

export const updNewMessageText = (newText) => {
   state.dialogsPage.newMsgText = newText
   rerenderEntireTree(state)
}

//Post 
export const addPost = () => {
   let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0,
   }
   state.profilePage.posts.push(newPost)
   state.profilePage.newPostText = ''
   rerenderEntireTree(state)

}

export const updNewPostText = (newText) => { 
   state.profilePage.newPostText = newText
   rerenderEntireTree(state)
}

export const subscribe = (observer) => {
   rerenderEntireTree = observer // pattern observer //publisher-subscriber
}

window.state = state
export default state