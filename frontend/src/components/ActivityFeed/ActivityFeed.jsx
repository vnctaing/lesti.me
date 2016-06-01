import TableRow from '../tables/TableRow.jsx';
import Feed from './Feed.jsx';


const ActivityFeed = (props) => {
  const { feeds, name } = props.profile;
  return (
    <div>
      {feeds.map((f, i) => {
        return (
          <TableRow key={i}>
            <Feed feed={f} appraiserName={name} />
          </TableRow>
        );
      })}
    </div>
  );
};

export default ActivityFeed;
