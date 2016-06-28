import * as betaActions from '../../actions/betaActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const SecretBetaAccessGenerator = (props) => {
  function createToken() {
    props.actions.createToken();
  }
  return (
    <div>
      <h1>Générer un token :</h1>
      <button className="btn btn-default" onClick={createToken}>create token</button>
      <p>Token : {props.betaAccess.newBetaToken ? props.betaAccess.newBetaToken : ''}</p>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(betaActions, dispatch),
  };
}


function mapStateToProps(state) {
  return {
    betaAccess: state.esteemApp.betaAccess,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SecretBetaAccessGenerator);
