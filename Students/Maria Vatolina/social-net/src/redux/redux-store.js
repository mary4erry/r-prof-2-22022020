import { combineReducers, createStore } from 'redux'
import profileReducers from './reducers/profile.reducer'
import dialogsReducer from './reducers/dialogs.reducer'
import navbarReducer from './reducers/navbar.reducer'
import usersReducer from './reducers/users.reducer'
import authReducer from './reducers/auth.reducer'


let reducers = combineReducers({
   profilePage: profileReducers,
   dialogsPage: dialogsReducer,
   navbar: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer,
})

let store = createStore(reducers)

window.store = store

export default store