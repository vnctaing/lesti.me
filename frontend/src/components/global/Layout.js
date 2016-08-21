import { Link, IndexLink } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action.js';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    session: state.esteemApp.signIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

const Layout = (props) => {
  return (
    <div id="wrapper">
      <Navbar session={props.session} actions={props.actions} />
      <div className="content--offset" id="content">
        {props.children}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
