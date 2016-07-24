import { IndexLink, Link } from 'react-router';

const Navbar = (props) => {
  const { session, actions } = props;
  
  function handleDisconnect() {
    actions.disconnectUser();
  }

  return (
    <div>
      <nav className="navbar lst-navbar">
        <div className="container">
          <div className="navbar-header">
            <IndexLink to="/"><img src="/assets/img/logo.svg" alt="Logo Lesti"></img></IndexLink>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {
                Object.keys(session.verifiedSessionToken).length
                ? <li><p>Hello, {session.loggedInUser.name}</p></li>
                : <li><Link to="/signin">Se connecter</Link></li>
              }
              {
                Object.keys(session.verifiedSessionToken).length
                ? <li onClick={handleDisconnect}>Se déconnecter</li>
                : ''
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
