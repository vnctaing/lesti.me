import moment from 'moment';

const Feed = (props) => {
  const { feed } = props;
  return (
    <div>
      <p>{moment(feed.createdAt).fromNow()}</p>
      <p>A perdu : {feed.esteemVariation}</p>
      <p>Motif : {feed.reason}</p>
    </div>
  );
};

export default Feed;
