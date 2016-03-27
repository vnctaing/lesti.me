import { reduxForm } from 'redux-form';

let SignupForm = (props) => {
    const { fields: {username, password, email}, handleSubmit } = props;
    return (
        <div className="panel">
            <form action="" className="sign-up__form">
                <div className="container-flex--vcenter container-flex--hcenter">
                    <label className="label" htmlFor="">Nom d'utilisateur :</label><input type="text" {...username}/>
                    <label className="label" htmlFor="">Mot de passe :</label><input type="password" {...password}/>
                    <label className="label" htmlFor="">Email :</label><input type="text" {...email}/>
                    <button className="btn btn--green" onClick={handleSubmit}>S'inscrire</button>
                </div>
            </form>
        </div>
    )
}

SignupForm = reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'email'], // a list of all your fields in your form
})(SignupForm)

export default SignupForm;