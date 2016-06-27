import Signup from '../signup/Signup.jsx';
import BetaAccess from '../BetaAccess/BetaAccess';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <div className="home__illustration home">
        <div className="container">
          <div className="row">
            {props.home.ui.showSignUpForm ? <Signup /> : <BetaAccess home={props.home} />}
          </div>
        </div>
      </div>
      <div className="home__credentials">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="home__icon-container">
                <i className="fa fa-arrow-up home__icon--green"></i>
                <i className="fa fa-arrow-down home__icon--red"></i>
              </div>
            </div>
            <div className="col-md-10">
              <div className="home__highlight home__highlight--right">
                Faites monter ou descendre vos amis de votre estime.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <div className="home__highlight">
                Votre estime est approuvé ou non par les visiteurs.
              </div>
            </div>
            <div className="col-md-2">
              <div className="home__icon-container">
                <i className="fa fa-thumbs-up home__icon--green"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    home: state.esteemApp.home,
  };
}


export default connect(mapStateToProps, null)(Home);
