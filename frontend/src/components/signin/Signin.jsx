import SignInForm from './SignInForm.jsx';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import * as actionCreators from '../../actions/action.js';
import { bindActionCreators } from 'redux';

class Signin extends React.Component {
  handleSubmit(data) {
    const req = Object.assign({}, data);
    this.props.actions.signingIn(req);
    initialize('signin', {}, ['username', 'password', 'email']);
  }

  render() {
    return (
      <div className="container">
        <h2 className="title title--boffset">Se connecter</h2>
        <SignInForm signIn={this.props.esteemApp.signIn} onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    esteemApp: state.esteemApp,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
