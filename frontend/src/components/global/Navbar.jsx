import {Link, IndexLink} from 'react-router';

export default class Navbar extends React.Component {
  render(){
    return (
    <div>
      <div>
        <h1><IndexLink to="/"><img src="assets/img/logo.svg" alt="Kiwi standing on oval"></img></IndexLink></h1>
        <ul>
            <li>
                <Link to="/signin">
                    <button>Se connecter</button>
                </Link>
            </li>
            <li>
                <Link to="/signup">
                    <button>S'inscrire</button>
                </Link>
            </li>
        </ul>
      </div>
      {this.props.children}
    </div>);

  }
}
