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
          <div className="navbar__container">
            <IndexLink to="/">
              <img
                src="/assets/img/logo.svg"
                alt="Logo Lesti"
                className="navbar__brandLogo"
              >
              </img>

            </IndexLink>
            <ul className="navbar__list">
              {
                Object.keys(session.verifiedSessionToken).length
                ? <li className="navbar__greeting navbar__item">
                  <p>Hello,
                    <Link to={`/de/${session.loggedInUser.name}`}>
                      {session.loggedInUser.name}
                    </Link>
                  </p>
                </li>
                : <li><Link to="/signin">Se connecter</Link></li>
              }
              {
                Object.keys(session.verifiedSessionToken).length
                ? <li className="navbar__item" onClick={handleDisconnect}>
                  <button className="btn btn--grey">Se déconnecter</button>
                </li>
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
