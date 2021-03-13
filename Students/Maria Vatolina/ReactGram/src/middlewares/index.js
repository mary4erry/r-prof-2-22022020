import { apiMiddleware } from "redux-api-middleware"
import messageMiddleware from "./messageMiddleware"

const logger = store => next => action => {
   console.log('dispatching', action)
   let result = next(action)
   console.log('next state', store.getState())
   return result
 }
 
 const crashReporter = store => next => action => {
   try {
     return next(action)
   } catch (err) {
     console.error('Caught an exception!', err)
     Raven.captureException(err, {
       extra: {
         action,
         state: store.getState()
       }
     })
     throw err
   }
 }

export default [
   messageMiddleware,
   apiMiddleware,
   logger, crashReporter
]