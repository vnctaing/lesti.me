import SignInForm from './SignInForm.jsx';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';
import * as actionCreators from '../../actions/action.js';
import { bindActionCreators } from 'redux';



class Signin extends React.Component {
    handleSubmit(data){
        const req = Object.assign({},data);
        this.props.dispatch(actionCreators.signingIn(req))
        this.props.dispatch(initialize('signin',{}, ['username', 'password', 'email']));
    }

    render() {
        const {failed_sign_in }= this.props.esteemApp.sign_page.ui
        const errorSign = failed_sign_in ? 'Identifiants incorrects.' : '';
        return(
        <div>
            <h2>Se connecter</h2>
            <span>{errorSign}</span>
            <SignInForm onSubmit={this.handleSubmit.bind(this)} />
        </div>)        
    }
};

function mapStateToProps(state){
    return {
        esteemApp: state.esteemApp
    }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}



export default connect(mapStateToProps)(Signin);