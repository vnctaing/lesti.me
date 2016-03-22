import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import AddAppraiseeForm from './AddAppraiseeForm.jsx';
import * as actionCreators from '../../../actions/action.js';



/**
 * AddAppraisee is the container component, it is the component connected
 * to the Redux Store, it also pass `handleSubmit` to `AddAppraiseeForm`
 * component
 */
class AddAppraisee extends React.Component {
    handleSubmit(data){
        const appraiser = this.props.params.appraiser;
        const req = Object.assign({},data,{appraiser});
        console.log('req', req);

        this.props.dispatch(actionCreators.postingNewAppraisee(req))
        this.props.dispatch(initialize('add_appraisee',{}, ['appraiseeName','esteem','description', 'list']));
    }

    render() {
        return(
            <div>
                <h1>AddAppraisee Page</h1>
                <AddAppraiseeForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}

export default connect()(AddAppraisee);