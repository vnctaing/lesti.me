import store from '../store/store.js'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import UserEsteem from '../components/user_esteem/UserEsteem.jsx'
import LeaderBoard from '../components/user_esteem/LeaderBoard/LeaderBoard.jsx'
import Navbar from '../components/global/Navbar.jsx'


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Navbar}>
        <Route path="/:username" component={UserEsteem} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
