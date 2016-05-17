import { Link, IndexLink } from 'react-router';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action.js';
import * as commentActions from '../../actions/commentActions.js';
import { bindActionCreators } from 'redux';
import DevTools from './DevTools.jsx';

function mapStateToProps(state) {
  return {
    session: state.esteemApp.signIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    commentActions: bindActionCreators(commentActions, dispatch),
  };
}

const Layout = (props) => {
  console.log('props in layout', props);
  return (
    <div id="wrapper">
      <Navbar session={props.session} />
      <div className="content--offset" id="content">
        {props.children}
      </div>
      <DevTools />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
