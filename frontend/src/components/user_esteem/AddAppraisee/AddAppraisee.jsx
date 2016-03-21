const AddAppraisee = (props) => {
  return (
    <div>
      <h3>Ajouter quelqu'un dans votre estime</h3>
      <form action="">
        <div>
          <label htmlFor="">Nom affiché</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="">Estime</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="">Liste</label>
          <select name="B">
            <option value="A">wesh</option>
            <option value="B">aloors</option>
            <option value="C">jul</option>
          </select>
        </div>        
      </form>
    </div>
  );
};

export default AddAppraisee;