import { reduxForm } from 'redux-form';

let SigninForm = (props) => {
    const { fields: {username, password}, handleSubmit } = props;
    return (
        <div>
            <form action="">
                <label>Nom d'utilisateur :</label>
                <input type="text" {...username}/>
                <label>Mot de passe :</label>
                <input type="text" {...password}/>
                <button onClick={handleSubmit}>S'inscrire</button>
            </form>
        </div>
    )
}

SigninForm = reduxForm({
  form: 'signin',
  fields: ['username', 'password'], // a list of all your fields in your form
})(SigninForm)

export default SigninForm;