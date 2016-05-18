import LabelIllustrated from './LabelIllustrated.jsx';
import UpdateAppraiseeEsteemModal from './UpdateAppraiseeEsteemModal.jsx';
import UpdateEsteemCta from './UpdateEsteemCta.jsx';

const LeaderBoardEstimation = (props) => {
  const {
    openAppraiseeUpdateModal,
    showCommentSection,
  } = props.actions;
  const { ui, appraisee, isItsPage } = props;

  function displayCommentPanel() {
    showCommentSection(props.appraisee._id);
  }

  function onUpdateEsteemClick(purposeReestimation) {
    openAppraiseeUpdateModal(props.appraisee._id, purposeReestimation);
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
        <LabelIllustrated icon="fa-thumbs-o-up" label="0" />
        <LabelIllustrated icon="fa-thumbs-o-down" label="0" />
        <LabelIllustrated icon="fa-commenting-o" label="0" />
      </div>
      <hr />
      <UpdateEsteemCta
        onUpdateEsteemClick={onUpdateEsteemClick}
        isItsPage={isItsPage}
      />
      <UpdateAppraiseeEsteemModal
        ui={ui}
        appraisee={appraisee}
        appraiser_name={props.appraiser_name}
        actions={props.actions}
      />
    </div>
  );
};

export default LeaderBoardEstimation;
