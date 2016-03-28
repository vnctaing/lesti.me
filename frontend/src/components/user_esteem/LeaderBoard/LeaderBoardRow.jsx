const LeaderBoardRow = (props) => {
    return (
        <div>
            <div className="container-flex--hcenter container-flex--space-between leaderboard__row">
                <img src={props.appraisee.picture} className="round-img__container"/>
                <div className="profile__text">
                    <p>{props.appraisee.name}</p>
                    <p className="leaderboard__esteem">{props.appraisee.esteem} pts</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default LeaderBoardRow;