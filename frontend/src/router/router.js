import store from '../store/store.js'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import UserEsteem from '../components/user_esteem/UserEsteem.jsx'
import LeaderBoard from '../components/user_esteem/LeaderBoard/LeaderBoard.jsx'
import AddAppraisee from '../components/user_esteem/AddAppraisee/AddAppraisee'
import Navbar from '../components/global/Navbar.jsx'
import Signup from '../components/signup/Signup.jsx'
import Signin from '../components/signin/Signin.jsx'
import * as actionCreators from '../actions/action.js';



const history = syncHistoryWithStore(browserHistory, store);


/**
 * onEnter Handler function called on the url 'de/:username'
 * triggers 
 * @param  {Object} store : Redux Store
 */
function fetchUserProfile(store) {
  return (nextState, replace) => {
    store.dispatch(actionCreators.fetchUserProfile(nextState.params.appraiser));
  };
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Navbar}>
        <Route path="de/:appraiser" component={UserEsteem} onEnter={fetchUserProfile(store)}>
        </Route>
        <Route path="de/:appraiser/add" component={AddAppraisee}></Route>
        <Route path="signup" component={Signup}></Route>
        <Route path="signin" component={Signin}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
