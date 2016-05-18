import { reduxForm } from 'redux-form';
const ModalHeader = require('react-bootstrap/lib/ModalHeader');
const Modal = require('react-bootstrap/lib/Modal');
const ModalBody = require('react-bootstrap/lib/ModalBody');
const ModalFooter = require('react-bootstrap/lib/ModalFooter');


let UpdateAppraiseeEsteemModal = (props) => {
  const { fields: { esteem, reason }, handleSubmit, appraiser_name, appraisee } = props;
  const { updatingAppraiseeEsteem, closeAppraiseeUpdateModal } = props.actions;
  const { show_update_appraisee_esteem_modal } = props.ui;
  const isIncreasingEsteem = show_update_appraisee_esteem_modal[appraisee._id] === 'increasing';

  function hideModal() {
    closeAppraiseeUpdateModal(appraisee._id);
  }

  function _onClick() {
    updatingAppraiseeEsteem();
  }

  return (
    <Modal show={Boolean(show_update_appraisee_esteem_modal[appraisee._id])} onHide={hideModal}>
      <Modal.Header>
        <div>
          <form action="" className="updateEsteem__form">
            <div className="form-group">
              <label htmlFor="">{isIncreasingEsteem ? 'Augmenter' : 'Diminuer'} :</label>
              <input
                className="form-control updateEsteem__variationInput"
                type="number"
                {...esteem}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Motif :</label>
              <input className="form-control" type="text" {...reason} />
            </div>
          </form>
        </div>
      </Modal.Header>
      <Modal.Footer>
        <div className="updateEsteem__ctaContainer">
          <button type="button" className="btn btn-redplain" onClick={_onClick}>
            {isIncreasingEsteem ? 'Augmenter' : 'Diminuer'}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};


UpdateAppraiseeEsteemModal = reduxForm({
  form: 'update_appraisee_esteem',
  fields: ['esteem', 'reason'], // a list of all your fields in your form
})(UpdateAppraiseeEsteemModal);

export default UpdateAppraiseeEsteemModal;
