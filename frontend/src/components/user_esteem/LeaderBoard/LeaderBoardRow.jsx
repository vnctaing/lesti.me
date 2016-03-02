const LeaderBoardRow = (props) => {
    return (
        <div>
            <img src={props.appraisee.picture} alt=""/>
            <p>{props.appraisee.name}</p>
            <p>{props.appraisee.esteem}</p>
            <button type="button">Approuver</button>
            <button type="button">Contester</button>
        </div>
    )
}

export default LeaderBoardRow;