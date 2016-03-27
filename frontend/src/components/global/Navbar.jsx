import {Link, IndexLink} from 'react-router';
import Footer from './Footer.jsx'

export default class Navbar extends React.Component {
  render(){
    return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="container-flex--hcenter container-flex--space-between">
            <h1><IndexLink to="/"><img src="assets/img/logo.svg" alt="Kiwi standing on oval"></img></IndexLink></h1>
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
      <div className="container content--offset">
        {this.props.children}
      </div>
      <Footer/>
    </div>);

  }
}
