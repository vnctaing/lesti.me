import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import esteemApp from '../reducers/reducer.js'
import { fetchUserProfile } from '../actions/action.js'
import { routerReducer } from 'react-router-redux'
// import DevTools from '../components/global/Devtools.jsx'




const loggerMiddleware = createLogger()


//** To activate de Devtools, use `createStore(reducer,enhancer)`
// const enhancer = compose(
//   applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     loggerMiddleware // neat middleware that logs actions
//   ),
//   DevTools.instrument()
// )


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
