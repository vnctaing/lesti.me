import CounterFontAwesome from './CounterFontAwesome.jsx';

const LeaderBoardRow = (props) => {
    const centeredPicture = {
      backgroundImage: `url(${props.appraisee.picture})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };

    return (
        <div className="leaderboard_row">
            <div>
                {/*<img style={centeredPicture} className="img-rounded img-responsive"/> */}

                <p className="leaderboard_name inline">{props.appraisee.appraiseeName}</p>
                <p className="inline">{props.appraisee.name}, </p>
                <div className="inline">
                    <p className="leaderboard__esteem inline text-right">{props.appraisee.esteem} pts dans son estime</p>
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
                    <div className="leaderboard__cta inline">
                        <i className="fa fa-arrow-up inline"></i>
                    </div>

                    <div className="leaderboard__cta inline">
                        <i className="fa fa-arrow-down inline"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoardRow;