import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import esteemApp from '../reducers/reducer.js';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


const loggerMiddleware = createLogger();

const reactRouterMiddleware = routerMiddleware(browserHistory);

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    reactRouterMiddleware
  )
  // ,
  // DevTools.instrument()
);

// const store = ();

const store = createStore(
  combineReducers({
    esteemApp,
    routing: routerReducer,
    form: formReducer,
  }),
  // => comment `enhancer` to disable the devtools and uncomment `applyMiddleware`
  // applyMiddleware(
  //   thunkMiddleware, // lets us dispatch() functions
  //   loggerMiddleware, // neat middleware that logs actions
  //   reactRouterMiddleware
  // ),
  enhancer
);

export default store;
