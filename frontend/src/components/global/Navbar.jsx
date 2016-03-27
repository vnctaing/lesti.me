import {IndexLink, Link} from 'react-router';

const Navbar = (props) => {
    return (
        <div className="navbar">
          <div className="container">
            <div className="container-flex--hcenter container-flex--space-between">
              <h1><IndexLink to="/"><img src="/assets/img/logo.svg"></img></IndexLink></h1>
              <div className="container-flex--hcenter">
                <Link to="/signin">
                    Se connecter
                </Link>

                <Link to="/signup">
                    <button className="btn btn--green">S'inscrire</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
    );
}

export default Navbar;