const UserProfileStats = (props) => {
    return (
        <div>
            <p>Personne dans lestime : {props.esteemCount}</p>
            <p>Estime Moyenne : {props.averageEsteem}</p>
            <p>Dernier changement : {props.lastChange}</p>
        </div>
    );
}


export default UserProfileStats;