import TableRow from '../tables/TableRow.jsx';
import Feed from './Feed.jsx';


const ActivityFeed = (props) => {
  const { feeds } = props.profile;
  return (
    <div>
      {feeds.map((f, i) => {
        return (
          <TableRow key={i}>
            <Feed feed={f} />
          </TableRow>
        );
      })}
    </div>
  );
};

export default ActivityFeed;
