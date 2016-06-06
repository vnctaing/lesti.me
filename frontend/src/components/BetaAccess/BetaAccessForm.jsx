import { reduxForm } from 'redux-form';

let BetaAccessForm = (props) => {
  const { fields: { betaToken }, handleSubmit } = props;

  return (
    <form action="">
      <input type="text" {...betaToken} />
      <button className="btn btn-default btn-greenplain" onClick={handleSubmit}>
        Accéder à la beta
      </button>
    </form>
  );
};

BetaAccessForm = reduxForm({
  form: 'signin',
  fields: ['betaToken'], // a list of all your fields in your form
})(BetaAccessForm);

export default BetaAccessForm;

