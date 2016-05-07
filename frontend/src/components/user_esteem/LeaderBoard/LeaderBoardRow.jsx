import LabelIllustrated from './LabelIllustrated.jsx';
import UpdateAppraiseeEsteemModal from './UpdateAppraiseeEsteemModal.jsx';
import LeaderBoardComments from './LeaderBoardComments.jsx';
import {initialize} from 'redux-form';


const LeaderBoardRow = (props) => {
    const centeredPicture = {
      backgroundImage: `url(${props.appraisee.picture})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };
    const { openAppraiseeUpdateModal, 
            closeAppraiseeUpdateModal,
            showCommentSection,
            } = props.actions;
    const { postingComment } = props.commentActions;
    const { initialize,ui, appraisee} = props;
    function handleClick() {
        openAppraiseeUpdateModal(appraisee._id);
    }
    function handleSubmit(e) {
        closeAppraiseeUpdateModal(appraisee._id);
    }

    function handleCommentSubmit (data){
        initialize(`comment`,{}, ['author', 'content']);
        const req = Object.assign({}, data, {_appraisee : props.appraisee._id})
        postingComment(req);
    }

    function displayCommentPanel(){
        showCommentSection(appraisee._id);
    }

    function renderRow() {
        if(props.ui.appraiseePanel[appraisee._id] === 'comments'){
            return ( 
                <LeaderBoardComments handleCommentSubmit={handleCommentSubmit}
                                     appraisee={props.appraisee}
                                     actions={props.actions}
                                     onSubmit={handleCommentSubmit.bind(this)}
                /> );
        } else if(props.ui.appraiseePanel[appraisee._id] === 'estimation') {
            return (
                <div>
                    <p className="leaderboard_name inline" onClick={displayCommentPanel}>{props.appraisee.appraiseeName}</p>
                    <p className="inline">{props.appraisee.name}, </p>
                    <div className="inline">
                        <p className="leaderboard__esteem inline text-right">{props.appraisee.esteem} pts <span>dans l'estime de Vincent</span></p>
                    </div>

                    <i className="fa fa-pencil leaderboard__icon--right"></i>
                    <p className="leaderboard__description">{props.appraisee.description}</p>
                    <div className="leaderboard__socialContainer" onClick={displayCommentPanel}>
                        <LabelIllustrated icon="fa-thumbs-o-up" label="0"/>
                        <LabelIllustrated icon="fa-thumbs-o-down" label="0"/>
                        <LabelIllustrated icon="fa-commenting-o" label="0"/>
                    </div>
                    <hr/>
                    <div className="leaderboard__ctaContainer">
                        <div className="leaderboard__cta inline leaderboard__cta--green" onClick={handleClick}>
                            <i className="fa fa-arrow-up inline"></i>
                        </div>
                        <div className="leaderboard__cta inline leaderboard__cta--red" onClick={handleClick}>
                            <i className="fa fa-arrow-down inline"></i>
                        </div>
                    </div>
                    <UpdateAppraiseeEsteemModal ui={ui}
                                                appraisee={appraisee}
                                                appraiser_name={props.appraiser_name} 
                                                actions={props.actions} />
                </div>
            );
        }
    }

    return (
        <div>
            <div className="leaderboard_row">
                {renderRow()}
            </div>
        </div>
    )
}

export default LeaderBoardRow;