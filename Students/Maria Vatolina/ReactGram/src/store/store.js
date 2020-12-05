import initialReducers from './reducers/index'
import { createStore } from 'redux'

export default function initStore() {
   let initialStore = {}

   return createStore(initialReducers, initialStore)
};
