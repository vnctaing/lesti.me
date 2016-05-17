import { IndexLink, Link } from 'react-router';

const Navbar = (props) => {
  const { session } = props;
  return (
    <div>
      <nav className="navbar lst-navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <IndexLink to="/"><img src="/assets/img/logo.svg" alt="Logo Lesti"></img></IndexLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              { Object.keys(session.verifiedSessionToken).length
               ? <li><p>Hello,</p></li>
               : <li><Link to="/signin">Se connecter</Link></li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
