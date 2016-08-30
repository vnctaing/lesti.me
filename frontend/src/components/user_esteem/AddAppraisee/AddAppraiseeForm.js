import { reduxForm } from 'redux-form';

let AddAppraiseeForm = (props) => {
  const { fields: {appraiseeName, esteem, description, list}, handleSubmit } = props;
  return (
    <div>
      <h3>Ajouter quelqu'un dans votre estime</h3>
      <form action="">
        <div>
          <label htmlFor="">Nom affiché</label>
          <input type="text" {...appraiseeName}/>
        </div>
        <div>
          <label htmlFor="">Estime</label>
          <input type="text" {...esteem}/>
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="10" {...description}></textarea>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

AddAppraiseeForm = reduxForm({
  form: 'add_appraisee',
  fields: ['appraiseeName', 'esteem', 'description', 'list'], // a list of all your fields in your form
})(AddAppraiseeForm)




export default AddAppraiseeForm;
