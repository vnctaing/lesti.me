const LeaderBoardRow = (props) => {
    const centeredPicture = {
      backgroundImage: `url(${props.appraisee.picture})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };

    return (
        <div className="leaderboard_row">
            <div className="container-flex--hcenter container-flex--space-between">
                {/*<img style={centeredPicture} className="img-rounded img-responsive"/> */}
                <div className="pimage"></div>
                <p>{props.appraisee.appraiseeName}</p>
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