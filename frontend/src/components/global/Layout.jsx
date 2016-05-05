import {Link, IndexLink} from 'react-router';
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import DevTools from './DevTools.jsx';


export default class Layout extends React.Component {
  render(){
    return (
    <div id="wrapper">
      <Navbar/>
      <div className="content--offset" id="content">
        {this.props.children}
      </div>
      <DevTools />
      {/*<Footer/>*/}
    </div>);

  }
}
