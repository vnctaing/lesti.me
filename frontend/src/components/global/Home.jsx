import Signup from '../signup/Signup.jsx';
import BetaAccess from '../BetaAccess/BetaAccess';
import { connect } from 'react-redux';

function showBetaAcces(props) {
  if (!Object.keys(props.session.verifiedSessionToken).length) {
    return props.home.ui.showSignUpForm ? <Signup /> : <BetaAccess home={props.home} />;
  }
  return '';
}

const Home = (props) => {
  return (
    <div>
      <div className="home__illustration home">
        <h2 className="home__tagline">Vos amis ne sont pas toujours parfaits. Faites-le savoir.</h2>
        {showBetaAcces(props)}
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
    session: state.esteemApp.signIn
  };
}


export default connect(mapStateToProps, null)(Home);
