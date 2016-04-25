import CounterFontAwesome from './CounterFontAwesome.jsx';
// import {Modal} from "react-bootstrap/lib/ModalHeader";
import UpdateAppraiseeEsteemModal from './UpdateAppraiseeEsteemModal.jsx';
const LeaderBoardRow = (props) => {
    const centeredPicture = {
      backgroundImage: `url(${props.appraisee.picture})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };
    function handleClick(){
        openAppraiseeUpdateModal();
    }
    const { openAppraiseeUpdateModal } = props.actions;
    return (
        <div>
            <div className="leaderboard_row">
                <div>
                    {/*<img style={centeredPicture} className="img-rounded img-responsive"/> */}

                    <p className="leaderboard_name inline">{props.appraisee.appraiseeName}</p>
                    <p className="inline">{props.appraisee.name}, </p>
                    <div className="inline">
                        <p className="leaderboard__esteem inline text-right">{props.appraisee.esteem} pts <span>dans l'estime de Vincent</span></p>
                    </div>

                    <i className="fa fa-pencil leaderboard__icon--right"></i>
                    <p className="leaderboard__description">{props.appraisee.description}</p>
                    <div>
                        <CounterFontAwesome icon="fa-thumbs-o-up" count="0"/>
                        <CounterFontAwesome icon="fa-thumbs-o-down" count="0"/>
                        <CounterFontAwesome icon="fa-commenting-o" count="0"/>
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
                </div>
            </div>
            <UpdateAppraiseeEsteemModal user_esteem={props.user_esteem} actions={props.actions}/>
        </div>
    )
}

export default LeaderBoardRow;