import { reduxForm } from 'redux-form';

let BetaAccessForm = (props) => {
  const { fields: { betaToken }, handleSubmit } = props;

  return (
    <form action="" className="form-inline">
      <div className="form-group inline">
        <input className="form-control betaAccess__input inline" type="text" {...betaToken} />
      </div>
      <button className="btn btn-default btn-greenplain betaAccess__cta" onClick={handleSubmit}>
        Accéder à la beta
      </button>
      <p>{props.home.ui.isBetaTokenInValid
          ? "Bien essayé...Votre token n'est pas valide."
          : ''}
      </p>
    </form>
  );
};

BetaAccessForm = reduxForm({
  form: 'signin',
  fields: ['betaToken'], // a list of all your fields in your form
})(BetaAccessForm);

export default BetaAccessForm;

