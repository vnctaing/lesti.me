import LeaderBoardComments from './LeaderBoardComments';
import LeaderBoardEstimation from './LeaderBoardEstimation';
// import LeaderboardEdit from './LeaderboardEdit.jsx';
const Modal = require('react-bootstrap/lib/Modal');


const LeaderBoardRow = (props) => {
  const {
   appraisee,
   isItsPage,
   actions,
   commentActions,
   comments,
   ui,
   initialize,
 } = props;
  function renderRow() {
    if (props.ui.appraiseePanel[appraisee._id] === 'comments') {
      return (
        <LeaderBoardComments
          appraisee={appraisee}
          actions={actions}
          commentActions={commentActions}
          comments={comments}
        />);
    }
    // else if (props.ui.appraiseePanel[appraisee._id] === 'edit') {
    //   return (
    //     <LeaderboardEdit
    //       appraisee={appraisee}
    //       actions={actions}
    //     />
    //   );
    // }
    return (
      <LeaderBoardEstimation
        appraisee={appraisee}
        actions={actions}
        approvalsActions={props.approvalsActions}
        approvedAppraisees={props.approvedAppraisees}
        ui={ui}
        isItsPage={isItsPage}
        initialize={initialize}
      />
    );
  }

  return (
    <div>
      <div className="lst-panel">
        <i
          className="fa fa-times pull-right"
          onClick={() => actions.openConfirmationDeleteModal(appraisee._id)}
        ></i>
        {renderRow()}
        <Modal
          show={ui.confirmationDeleteModal[appraisee._id]}
          onHide={() => actions.closeConfirmationDeleteModal(appraisee._id)}
        >
          <div>
            Êtes vous sur ?
            <div>
              <button
                onClick={() => {
                  actions.deleteAppraisee(appraisee._id);
                  actions.closeConfirmationDeleteModal(appraisee._id);
                }}
              >
                Oui, supprimer
              </button>
              <button
                onClick={() => {
                  actions.closeConfirmationDeleteModal(appraisee._id)
                }}
              >
              Non, annuler
              </button>
            </div>
          </div>
        </Modal>

      </div>
    </div>
  );
};

export default LeaderBoardRow;
