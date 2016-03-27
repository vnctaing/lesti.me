import { reduxForm } from 'redux-form';

let SignupForm = (props) => {
    const { fields: {username, password, email}, handleSubmit } = props;
    return (
        <div>
            <form action="">
                <label htmlFor="">Nom d'utilisateur :</label><input type="text" {...username}/>
                <label htmlFor="">Mot de passe :</label><input type="password" {...password}/>
                <label htmlFor="">Email :</label><input type="text" {...email}/>
                <button onClick={handleSubmit}>S'inscrire</button>
            </form>
        </div>
    )
}

SignupForm = reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'email'], // a list of all your fields in your form
})(SignupForm)

export default SignupForm;