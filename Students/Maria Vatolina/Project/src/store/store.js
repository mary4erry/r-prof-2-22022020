import initialRedusers from './reducers' // import Mega Reducer
import { createStore, compose, applyMiddleware } from 'redux'

import middlewares from '../middlewares/index.js'

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

function initStore() {
    let initialStore = {}
    
    return createStore(
        initialRedusers(history), 
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        )
    )
}

export default initStore;