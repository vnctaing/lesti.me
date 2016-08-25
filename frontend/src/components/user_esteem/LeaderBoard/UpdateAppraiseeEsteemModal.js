import { reduxForm } from 'redux-form';
const ModalHeader = require('react-bootstrap/lib/ModalHeader');
const Modal = require('react-bootstrap/lib/Modal');
const ModalBody = require('react-bootstrap/lib/ModalBody');
const ModalFooter = require('react-bootstrap/lib/ModalFooter');


let UpdateAppraiseeEsteemModal = (props) => {
  const { fields: { esteemVariation, reason }, appraisee, handleSubmit } = props;
  const { closeAppraiseeUpdateModal } = props.actions;
  const { show_update_appraisee_esteem_modal } = props.ui;
  const isIncreasingEsteem = show_update_appraisee_esteem_modal[appraisee._id] === 'increasing';

  function hideModal() {
    closeAppraiseeUpdateModal(appraisee._id);
  }

  return (
    <form action="">
      <Modal show={Boolean(show_update_appraisee_esteem_modal[appraisee._id])} onHide={hideModal}>
        <Modal.Header>
          <div>
            <div className="updateEsteem__form">
              <div className="form-group">
                <label htmlFor="">{isIncreasingEsteem ? 'Augmenter' : 'Diminuer'} :</label>
                <input
                  className="form-control updateEsteem__variationInput"
                  type="number"
                  {...esteemVariation}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Motif :</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder={
                    isIncreasingEsteem
                      ? 'A cuisiner un bon plat, a offert un café'
                      : 'Est encore en retard, blague pas drôle'
                  }
                  {...reason}
                />
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Footer>
          <div className="updateEsteem__ctaContainer">
            <button
              type="button"
              className={
                'btn' + isIncreasingEsteem
                  ? 'btn-greenplain'
                  : 'btn-redplain'}
              onClick={handleSubmit}>
              {isIncreasingEsteem ? 'Augmenter' : 'Diminuer'}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </form>
  );
};


UpdateAppraiseeEsteemModal = reduxForm({
  form: 'update_appraisee_esteem',
  fields: ['esteemVariation', 'reason'], // a list of all your fields in your form
})(UpdateAppraiseeEsteemModal);

export default UpdateAppraiseeEsteemModal;
