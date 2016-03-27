import { reduxForm } from 'redux-form';

let SigninForm = (props) => {
    const { fields: {username, password}, handleSubmit } = props;
    return (
        <div className="panel">
            <form action="" className="sign-up__form">
                <div className="container-flex--vcenter container-flex--hcenter">
                <label className="label">Nom d'utilisateur :</label>
                <input type="text" {...username}/>
                <label className="label">Mot de passe :</label>
                <input type="text" {...password}/>
                <button className="btn btn--green" onClick={handleSubmit}>S'inscrire</button>
                </div>
            </form>
        </div>
    )
}

SigninForm = reduxForm({
  form: 'signin',
  fields: ['username', 'password'], // a list of all your fields in your form
})(SigninForm)

export default SigninForm;