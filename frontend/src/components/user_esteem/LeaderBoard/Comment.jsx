import LabelIllustrated from '../../icons/LabelIllustrated.jsx';
import moment from 'moment';


const Comment = (props) => {
  const { comment } = props;
  const { createdAt, author, content } = comment;
  return (
    <div>
      <div className="float-right">
        <LabelIllustrated icon="fa-clock-o" label={moment(createdAt).fromNow()} />
      </div>
      <p>{author}</p>
      <p className="leaderboard__comment">{content}</p>
      <hr />
    </div>
  );
};

export default Comment;
