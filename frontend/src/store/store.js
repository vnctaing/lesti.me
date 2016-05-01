import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import esteemApp from '../reducers/reducer.js'
import { fetchUserProfile } from '../actions/action.js'
import { routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
// import DevTools from '../components/global/Devtools.jsx'
import { routerMiddleware, push } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';




const loggerMiddleware = createLogger()

const reactRouterMiddleware = routerMiddleware(browserHistory);

const store = createStore(
  combineReducers({
    esteemApp,
    routing: routerReducer,
    form: formReducer
  }),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    reactRouterMiddleware
  )
);
export default store;