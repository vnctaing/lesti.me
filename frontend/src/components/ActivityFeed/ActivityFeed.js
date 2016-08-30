import TableRow from '../tables/TableRow';
import Feed from './Feed';

const ActivityFeed = (props) => {
  const { feeds, name } = props.profile;
  return (
    <div>
      {feeds.length
        ? feeds.map((f, i) => {
        return (
          <TableRow key={i}>
            <Feed feed={f} appraiserName={name} />
          </TableRow>
        );
      })
      : <p>Il n'y pas encore eu d'activité dans l'estime de {name}</p>
    }
    </div>
  );
};

export default ActivityFeed;
