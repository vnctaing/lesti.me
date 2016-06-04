import LabelIllustrated from '../../icons/LabelIllustrated.jsx';
import UpdateAppraiseeEsteemModal from './UpdateAppraiseeEsteemModal.jsx';
import UpdateEsteemCta from './UpdateEsteemCta.jsx';
import { initialize } from 'redux-form';

const LeaderBoardEstimation = (props) => {
  const {
    openAppraiseeUpdateModal,
    showCommentSection,
    updateAppraiseeEsteem,
  } = props.actions;
  const { ui, appraisee, isItsPage } = props;

  function displayCommentPanel() {
    showCommentSection(appraisee._id);
  }

  function onUpdateEsteemClick(purposeReestimation) {
    openAppraiseeUpdateModal(appraisee._id, purposeReestimation);
  }

  function handleSubmit(formData) {
    let r = formData;
    if (ui.show_update_appraisee_esteem_modal[appraisee._id] === 'decreasing') {
      r.esteemVariation = formData.esteemVariation * -1;
    }
    updateAppraiseeEsteem(r, appraisee._id);
    // initialize('update_appraisee_esteem', {}, ['esteemVariation', 'reason']));
  }

  return (
    <div>
      <p className="leaderboard_name inline" onClick={displayCommentPanel}>
        {appraisee.appraiseeName}
      </p>
      <p className="inline">{appraisee.name}, </p>
      <div className="inline">
        <p className="leaderboard__esteem inline text-right">
          {appraisee.esteem} pts <span>dans l'estime de Vincent</span>
        </p>
      </div>
      {isItsPage ? <i className="fa fa-pencil leaderboard__icon--right"></i> : ''}
      <p className="leaderboard__description">{appraisee.description}</p>
      <div className="leaderboard__socialContainer" onClick={displayCommentPanel}>
        <LabelIllustrated icon="fa-thumbs-o-up" label={appraisee.approvals} />
        <LabelIllustrated icon="fa-commenting-o" label={appraisee._comments.length} />
      </div>
      <hr />
      <UpdateEsteemCta
        appraisee={appraisee}
        approvalsActions={props.approvalsActions}
        onUpdateEsteemClick={onUpdateEsteemClick}
        isItsPage={isItsPage}
        approvedAppraisees={props.approvedAppraisees}
      />
      <UpdateAppraiseeEsteemModal
        ui={ui}
        appraisee={appraisee}
        actions={props.actions}
        initialize={initialize}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LeaderBoardEstimation;
