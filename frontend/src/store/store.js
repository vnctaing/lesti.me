import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import esteemApp from '../reducers/reducer.js'
import { fetchUserProfile } from '../actions/action.js'
import { routerReducer } from 'react-router-redux'



const loggerMiddleware = createLogger()

const store = createStore(
  combineReducers({
    esteemApp,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

export default store;

store.dispatch(fetchUserProfile());
