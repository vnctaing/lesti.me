import { reduxForm } from 'redux-form';
const ModalHeader = require("react-bootstrap/lib/ModalHeader");
const Modal = require('react-bootstrap/lib/Modal');
const ModalBody = require('react-bootstrap/lib/ModalBody');


let UpdateAppraiseeEsteemModal = (props) => {

  const { fields: {esteem, reason}, handleSubmit } = props;
  const { updatingAppraiseeEsteem, closeAppraiseeUpdateModal } = props.actions;
  const { show_update_appraisee_esteem_modal } = props.user_esteem.ui;

  return (
    <Modal show={show_update_appraisee_esteem_modal} onHide={closeAppraiseeUpdateModal}>
      <Modal.Header closeButton>
        <Modal.Title>Faire descendre dans mon estime</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form action="">
            <div className="form-group">
              <label htmlFor="">Diminuer :</label>
              <input className="form-control" type="text" {...esteem}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Motif :</label>
              <textarea className="form-control" 
                        type="text" 
                        value={reason.value || ''}
                        {...reason} />
            </div>
            <input type="submit" className="btn btn-default" {...handleSubmit}/>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  )
};


UpdateAppraiseeEsteemModal = reduxForm({
  form: 'update_appraisee_esteem',
  fields: ['esteem', 'reason'], // a list of all your fields in your form
})(UpdateAppraiseeEsteemModal)

export default UpdateAppraiseeEsteemModal;