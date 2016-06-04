import store from '../store/store.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import UserEsteem from '../components/user_esteem/UserEsteem.jsx';
import LeaderBoard from '../components/user_esteem/LeaderBoard/LeaderBoard.jsx';
import AddAppraisee from '../components/user_esteem/AddAppraisee/AddAppraisee';
import Layout from '../components/global/Layout.jsx';
import Signup from '../components/signup/Signup.jsx';
import Signin from '../components/signin/Signin.jsx';
import ErrorPage from '../components/global/ErrorPage.jsx';
import Home from '../components/global/Home.jsx';
import * as actionCreators from '../actions/action.js';
import * as approvalsActionCreators from '../actions/approvalsActions.js';


const history = syncHistoryWithStore(browserHistory, store);


/**
 * onEnter Handler function called when accessing the url 'de/:username'
 * triggers 
 * @param  {Object} store : Redux Store
 */
function onEnterActions(store) {
  return (nextState, replace) => {
    store.dispatch(actionCreators.fetchUserProfile(nextState.params.appraiser));
    store.dispatch(approvalsActionCreators.checkVisitorApprovals());
  };
}

function checkAuth(store) {
  return (nextState, replace) => {
    store.dispatch(actionCreators.checkUserAuth());
  };
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout} onEnter={checkAuth(store)}>
        <IndexRoute component={Home} />
        <Route path="de/:appraiser" component={UserEsteem} onEnter={onEnterActions(store)} />
        <Route path="de/:appraiser/add" component={AddAppraisee} />
        <Route path="signup" component={Signup} />
        <Route path="signin" component={Signin} />
        <Route path="/appraiser_not_found" component={ErrorPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
