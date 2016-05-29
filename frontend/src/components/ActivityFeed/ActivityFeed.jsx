import TableRow from '../tables/TableRow.jsx';
import Feed from './Feed.jsx';


const ActivityFeed = (props) => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {arr.map((a) => {
        return (
          <TableRow key={a}>
            <Feed />
          </TableRow>
        );
      })}
    </div>
  );
};

export default ActivityFeed;
