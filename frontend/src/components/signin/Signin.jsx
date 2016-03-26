import SignInForm from './SignInForm.jsx';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';
import * as actionCreators from '../../actions/action.js';


class Signin extends React.Component {
    handleSubmit(data){
        const req = Object.assign({},data);
        this.props.dispatch(actionCreators.signingIn(req))
        this.props.dispatch(initialize('signin',{}, ['username', 'password', 'email']));
    }

    render() {
        return(
        <div>
            <h2>S'inscrire</h2>
            <SignInForm onSubmit={this.handleSubmit.bind(this)} />
        </div>)        
    }
};

export default connect()(Signin);