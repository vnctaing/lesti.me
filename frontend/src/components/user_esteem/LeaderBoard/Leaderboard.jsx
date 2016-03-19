import LeaderBoardRow from './LeaderBoardRow.jsx';

// const appraisees = [
//     {
//         id: 1,
//         picture: 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
//         name: 'Leonardo Di Caprio',
//         esteem: '420'
//     },
//     {
//         id: 2,
//         picture: 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
//         name: 'Caprisun',
//         esteem: '123'
//     },
//     {
//         id: 3,
//         picture: 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
//         name: 'Foulek',
//         esteem: '420'
//     },
// ];

// const LeaderBoardContent = appraisees.map((a) => <LeaderBoardRow appraisee={a} key={a.id} /> )

const LeaderBoard = (props) => {
    return (
        <div>
            {LeaderBoardContent}
        </div>
    );
}

export default LeaderBoard;