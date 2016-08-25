import { reduxForm } from 'redux-form';

let AddCommentForm = (props) => {
  const { fields: { author, content }, handleSubmit } = props;


  return (
    <form action="">
      <div className="form-group">
        <input
          {...content}
          className="form-control input-sm"
          type="text"
          placeholder="Écrire un commentaire..."
        />
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-xs-6">
            <input
              {...author}
              type="text"
              className="form-control input-sm"
              placeholder="Auteur"
            />
          </div>
        </div>
      </div>
      <button className="btn btn-default btn--greenplain" onClick={handleSubmit}>
        Publier
      </button>
    </form>
  );
};

AddCommentForm = reduxForm({
  form: 'comment',
  fields: ['author', 'content'], // a list of all your fields in your form
})(AddCommentForm);

export default AddCommentForm;
