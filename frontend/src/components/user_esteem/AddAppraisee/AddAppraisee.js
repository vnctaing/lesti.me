import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import AddAppraiseeForm from './AddAppraiseeForm';
import * as actionCreators from '../../../actions/action.js';
import { bindActionCreators } from 'redux';

/**
 * AddAppraisee is the container component, it is the component connected
 * to the Redux Store, it also pass `handleSubmit` to `AddAppraiseeForm`
 * component
 */
class AddAppraisee extends React.Component {
  handleSubmit(data) {
    const appraiser = this.props.params.appraiser;
    const req = Object.assign(
      {},
      data,
      { appraiser },
      { sessionToken: this.props.session.verifiedSessionToken }
    );
    this.props.actions.postingNewAppraisee(req, this.props.session.loggedInUser._id);
    this.props.initialize('add_appraisee', {}, ['appraiseeName', 'esteem', 'description', 'list']);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel">
                <AddAppraiseeForm onSubmit={this.handleSubmit.bind(this)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    esteemApp: state.esteemApp,
    session: state.esteemApp.signIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    initialize: bindActionCreators(initialize, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddAppraisee);
