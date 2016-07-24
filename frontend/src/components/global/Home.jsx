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
        <div className="home__illustrationContent">
          {showBetaAcces(props)}
        </div>
      </div>
      <div className="home__feature">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>Estimation de vos amis</h3>
              <p>Vous avez des amis et de l'estime pour eux. Faites savoir leur enfin savoir.</p>
            </div>
            <div className="col-md-4">
              <img src="https://www.meetingbird.com/images/rocket.png" width="300" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="home__feature">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="https://www.meetingbird.com/images/rocket.png" width="300" alt="" />
            </div>
            <div className="col-md-8">
              <h3>Estimation de vos amis</h3>
              <p>Vous avez des amis et de l'estime pour eux. Faites savoir leur enfin savoir.</p>
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
    session: state.esteemApp.signIn,
  };
}


export default connect(mapStateToProps, null)(Home);
