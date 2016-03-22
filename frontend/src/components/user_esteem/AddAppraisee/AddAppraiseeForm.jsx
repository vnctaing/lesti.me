import { reduxForm } from 'redux-form';

let AddAppraiseeForm = (props) => {
  const { fields: {username, esteem, description, list}, handleSubmit } = props;
  return (
    <div>
      <h3>Ajouter quelqu'un dans votre estime</h3>
      <form action="">
        <div>
          <label htmlFor="">Nom affiché</label>
          <input type="text" {...username}/>
        </div>
        <div>
          <label htmlFor="">Estime</label>
          <input type="text" {...esteem}/>
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="10" {...description}></textarea>
        </div>
        <div>
          <label htmlFor="">Liste</label>
          <select name="B" {...list}>
            <option value="A">wesh</option>
            <option value="B">aloors</option>
            <option value="C">jul</option>
          </select>
        </div>        
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
// 
// 


AddAppraiseeForm = reduxForm({
  form: 'add_appraisee',
  fields: ['username', 'esteem', 'description', 'list'], // a list of all your fields in your form
})(AddAppraiseeForm)




export default AddAppraiseeForm;