import initRedusers from './reducers' // import Mega Reducer
import middlewares from '../middlewares/index.js'

import { createStore, compose, applyMiddleware } from 'redux'

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
    key: 'reactgram',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['msgReducer', 'chatReducer']
 }

export const history = createBrowserHistory()

function initStore() {
    let initialStore = {}
    
    const store =  createStore(
        persistReducer(persistConfig,initRedusers(history)), 
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        )
    )
    const persistor = persistStore(store)

    return { store, persistor }
}

export default initStore;