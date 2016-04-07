const LeaderBoardRow = (props) => {
    const centeredPicture = {
      backgroundImage: `url(${props.appraisee.picture})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };

    return (
        <div>
            <div className="container-flex--hcenter container-flex--space-between leaderboard__row">
                <img style={centeredPicture} className="round-img__container"/>
                <div className="pimage"></div>
                <p>{props.appraisee.description}</p>
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