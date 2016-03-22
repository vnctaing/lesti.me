import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import AddAppraiseeForm from './AddAppraiseeForm.jsx';


class AddAppraisee extends React.Component {
    handleSubmit(data){
        console.log('submission data', data);
        this.props.dispatch(initialize('add_appraisee',{}, ['username','esteem']));
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