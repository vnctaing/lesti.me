import moment from 'moment';
import LabelIllustrated from '../icons/LabelIllustrated';

const Feed = (props) => {
  const { feed, appraiserName } = props;

  const { esteemVariation, createdAt } = feed;
  const feedText = `
  ${esteemVariation < 0 ? ' a perdu' : ' est monté de'} 
  ${esteemVariation} pts dans l'estime de`;

  return (
    <div className="feed">
      <div className="feed__createdAt ">
        <LabelIllustrated icon="fa-clock-o" label={moment(createdAt).fromNow()} />
      </div>
        <p className="feed__content">
          <span className="feed__text--highlight">{feed._appraisee.appraiseeName}</span>
          {feedText}
          <span className="feed__text--highlight"> {appraiserName}</span>
        </p>
      <p className="feed_reason">Motif : {feed.reason}</p>
    </div>
  );
};

export default Feed;
