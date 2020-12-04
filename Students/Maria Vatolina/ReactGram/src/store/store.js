import initialReducers from './reducers/index'
import { createStore, compose, applyMiddleware } from 'redux'

import middlewares from '../middlewares/index'


function initStore() {
   let initialStore = {}

   return createStore(
         initialReducers, 
         initialStore,
         compose (
            applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
         ),
   )
}

export default initStore