import SignupForm from './SignupForm.jsx';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import * as actionCreators from '../../actions/action.js';
import * as betaActions from '../../actions/betaActions.js';

class Signup extends React.Component {
  handleSubmit(data) {
    const req = Object.assign({}, data);
    this.props.dispatch(actionCreators.signingUp(req));
    this.props.dispatch(betaActions.consumeToken(this.props.home.betaToken));
    this.props.dispatch(initialize('signup', {}, ['username', 'password', 'email']));
  }

  render() {
    return (
      <div>
        <h2>Accéder à la bêta et se créer un compte</h2>
        <SignupForm home={this.props.home} onSubmit={this.handleSubmit.bind(this)} />
        <p>{this.props.home.errorMessageSignUp}</p>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    home: state.esteemApp.home,
  };
}

export default connect(mapStateToProps, null)(Signup);
