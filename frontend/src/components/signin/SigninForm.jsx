import { reduxForm } from 'redux-form';

let SigninForm = (props) => {
  const { fields: { username, password }, handleSubmit } = props;
  const { failedSignIn } = props.signIn.ui;

  return (
    <div className="panel">
      <form action="" className="sign-up__form">
        <div className="">
          <span className="error">{failedSignIn ? 'Identifiants incorrects.' : ''}</span>
          <div className="form-group">
            <label className="label">Nom d'utilisateur :</label>
            <input className="form-control" type="text" {...username} />
          </div>
          <div className="form-group">
            <label className="label">Mot de passe :</label>
            <input className="form-control" type="password" {...password} />
          </div>
          <button className="btn btn-default btn--green" onClick={handleSubmit}>
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

SigninForm = reduxForm({
  form: 'signin',
  fields: ['username', 'password'], // a list of all your fields in your form
})(SigninForm);

export default SigninForm;
