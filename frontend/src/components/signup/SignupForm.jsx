import { reduxForm } from 'redux-form';

let SignupForm = (props) => {
    const { fields: {username, password, email}, handleSubmit } = props;
    return (
        <div className="panel">
            <form action="" className="signupForm">
                <div className="form-group">
                    <label className="label" htmlFor="">Nom d'utilisateur :</label>
                    <input className="form-control" type="text" {...username}/>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="">Mot de passe :</label>
                    <input className="form-control" type="password" {...password}/>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="">Email :</label>
                    <input className="form-control" type="text" {...email}/>
                </div>
                <button className="btn btn-default btn--green" onClick={handleSubmit}>S'inscrire</button>
            </form>
        </div>
    )
}

SignupForm = reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'email'], // a list of all your fields in your form
})(SignupForm)

export default SignupForm;