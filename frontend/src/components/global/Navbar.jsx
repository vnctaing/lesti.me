import {IndexLink, Link} from 'react-router';

const Navbar = (props) => {
    return (
        <div>
          <nav className="navbar lst-navbar">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <IndexLink to="/"><img src="/assets/img/logo.svg"></img></IndexLink>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/signin">Se connecter</Link></li>
                  <li>
                    <Link to="/signup"><button className="btn btn-default btn--green">S'inscrire</button></Link>
                  </li>

                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider" />
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container-fluid */}
          </nav>             
        </div>


    );
}

export default Navbar;