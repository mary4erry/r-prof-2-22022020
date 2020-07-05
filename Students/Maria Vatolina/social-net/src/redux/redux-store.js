import { combineReducers, createStore, applyMiddleware } from 'redux'
import profileReducers from './reducers/profile.reducer'
import dialogsReducer from './reducers/dialogs.reducer'
import navbarReducer from './reducers/navbar.reducer'
import usersReducer from './reducers/users.reducer'
import authReducer from './reducers/auth.reducer'
import thunkMiddleware  from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   profilePage: profileReducers,
   dialogsPage: dialogsReducer,
   navbar: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store