import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import esteemApp from '../reducers/reducer.js'
import { fetchUserProfile } from '../actions/action.js'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import UserEsteem from '../components/user_esteem/UserEsteem.jsx'
import LeaderBoard from '../components/user_esteem/LeaderBoard/LeaderBoard.jsx'


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


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/frontend" component={UserEsteem}>
        <Route path="foo" component={LeaderBoard}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(fetchUserProfile());
