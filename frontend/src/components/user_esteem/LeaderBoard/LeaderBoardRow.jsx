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
    const { openAppraiseeUpdateModal, closeAppraiseeUpdateModal} = props.actions;
    const { initialize } = props;

    function handleClick() {
        openAppraiseeUpdateModal();
    }
    function handleSubmit(e) {
        closeAppraiseeUpdateModal();
    }

    function handleCommentSubmit (a){
        initialize('comment',{}, ['author', 'content']);
    }

    function displayPanel() {
        if(props.panel === 'comments'){
            return ( 
                <LeaderBoardComments handleCommentSubmit={handleCommentSubmit}
                                     appraisee={props.appraisee}
                                     onSubmit={handleCommentSubmit.bind(this)}
                /> );
        } else {
            return (
                <div>
                    <p className="leaderboard_name inline">{props.appraisee.appraiseeName}</p>
                    <p className="inline">{props.appraisee.name}, </p>
                    <div className="inline">
                        <p className="leaderboard__esteem inline text-right">{props.appraisee.esteem} pts <span>dans l'estime de Vincent</span></p>
                    </div>

                    <i className="fa fa-pencil leaderboard__icon--right"></i>
                    <p className="leaderboard__description">{props.appraisee.description}</p>
                    <div>
                        <LabelIllustrated icon="fa-thumbs-o-up" label="0"/>
                        <LabelIllustrated icon="fa-thumbs-o-down" label="0"/>
                        <LabelIllustrated icon="fa-commenting-o" label="0"/>
                    </div>
                    <hr/>
                    <div className="leaderboard__ctaContainer">
                        <div className="leaderboard__cta inline leaderboard__cta--green" onClick={handleClick}>
                            <i className="fa fa-arrow-up inline"></i>
                        </div>
                        <div className="leaderboard__cta inline leaderboard__cta--red">
                            <i className="fa fa-arrow-down inline"></i>
                        </div>
                    </div>
                    <UpdateAppraiseeEsteemModal user_esteem={props.user_esteem} 
                                                appraiser_name={props.appraiser_name} 
                                                actions={props.actions} />
                </div>
            );
        }
    }

    return (
        <div>
            <div className="leaderboard_row">
                {displayPanel()}
            </div>
        </div>
    )
}

export default LeaderBoardRow;