import { reduxForm } from 'redux-form';
import * as betaActions from '../../actions/betaActions';

let SignupForm = (props) => {
  const { asyncValidating, fields: { username, password, email }, handleSubmit } = props;
  return (
    <div className="panel">
      <form action="" className="signupForm">
        <div className="form-group">
          <label className="label" htmlFor="">Nom d'utilisateur :</label>
          <input className="form-control" type="text" {...username} />
          {asyncValidating === 'username' && <i className="fa fa-spinner fa-spin"></i>}
          {username.touched && username.error && <div className="signupForm__error">{username.error}</div>}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="">Mot de passe :</label>
          <input className="form-control" type="password" {...password} />
          {password.touched && password.error && <div className="signupForm__error">{password.error}</div>}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="">Email :</label>
          <input className="form-control" type="text" {...email} />
          {email.touched && email.error && <div className="signupForm__error">{email.error}</div>}
        </div>
        <button className="btn btn-default btn--green" onClick={handleSubmit}>S'inscrire</button>
      </form>
    </div>
  );
};

const asyncValidate = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.API_URL}/appraiser/${values.username}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then((json) => {
      json.status === 200
        ? reject({ username: 'Ce nom est déjà pris.' })
        : resolve();
    });
  });
};

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Champs requis';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.password) {
    errors.password = 'Champs requis';
  }

  if (!values.email) {
    errors.email = 'Champs requis';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email adresse non valide';
  }
  return errors;
};

SignupForm = reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'email'],
  validate,
  asyncBlurFields: ['username'],
  asyncValidate,
})(SignupForm);

export default SignupForm;
