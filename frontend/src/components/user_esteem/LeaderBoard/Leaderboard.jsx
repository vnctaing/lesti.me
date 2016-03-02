import LeaderBoardRow from './LeaderBoardRow.jsx';

const appraisees = [
    {
        picture: 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
        name: 'Leonardo Di Caprio',
        esteem: '420'
    },
    {
        picture: 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
        name: 'Caprisun',
        esteem: '123'
    },
    {
        picture: 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
        name: 'Foulek',
        esteem: '420'
    },
];

const LeaderBoardContent = appraisees.map((a) => {
    return <LeaderBoardRow appraisee={a} />
})

const LeaderBoard = (props) => {
    return (
        <div>
            {LeaderBoardContent}
        </div>
    );
}

export default LeaderBoard;