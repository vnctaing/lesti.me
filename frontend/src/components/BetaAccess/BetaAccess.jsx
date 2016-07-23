import BetaAccessForm from './BetaAccessForm';
import * as betaActions from '../../actions/betaActions.js';
import * as actions from '../../actions/action.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const BetaAccess = (props) => {
  function handleSubmit(data) {
    const req = Object.assign({}, data);
    props.actions.disconnectUser();
    props.betaActions.verifyBetaAccessToken(data.betaToken);
  }

  return (
    <div>
      <p>Entrer son code d'accès beta :</p>
      <BetaAccessForm home={props.home} onSubmit={handleSubmit.bind(this)} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    betaActions: bindActionCreators(betaActions, dispatch),
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(BetaAccess);
