import SignupForm from './SignupForm.jsx';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';
import * as actionCreators from '../../actions/action.js';


class Signup extends React.Component {
    handleSubmit(data){
        const req = Object.assign({},data);
        this.props.dispatch(actionCreators.signingUp(req))
        this.props.dispatch(initialize('signup',{}, ['username', 'password', 'email']));
    }

    render() {
        return(
        <div className="container">
            <h2 className="title title--boffset">S'inscrire</h2>
            <SignupForm onSubmit={this.handleSubmit.bind(this)} />
        </div>)        
    }
};

export default connect()(Signup);