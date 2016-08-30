import Signup from '../signup/Signup.js';
import BetaAccess from '../BetaAccess/BetaAccess';
import Footer from '../global/Footer';
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
            <div className="col-md-5">
              <h3 className="home__featureTitle">Votre estime en ligne</h3>
              <p className="home_featureDescription">
                Vous avez des amis et de l'estime pour eux. Faites-leur enfin savoir
                 pour qui est ce que vous avez de l'estime. À l'aide de lesti.me, tenez à jour un classement de vos amis.
              </p>
            </div>
            <div className="col-md-4 col-md-offset-3">
              <img src="/assets/img/charts.svg" className="home__illustrationIcon" width="300" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="home__feature">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/assets/img/friendship.svg" className="home__illustrationIcon" width="300" alt="" />
            </div>
            <div className="col-md-5 col-md-offset-3">
              <h3 className="home__featureTitle">Récompensez ou sanctionnez vos proches</h3>
              <p className="home_featureDescription">
                Une blague sans succès, un n-ième retard, un cadeau offert... toutes les raisons sont bonnes pour faire
                 monter ou descendre votre proche dans votre estime. Soyez enfin honnête avec eux.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__feature home__feature--noborder">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h3 className="home__featureTitle">Évolutions commentées</h3>
              <p className="home_featureDescription">
                À travers un fil d'actualité. Suivez en direct l'évolution commentés les
                 plus récentes de vos proches estimées, ils sont mis à jour instantanément.
              </p>
            </div>
            <div className="col-md-4 col-md-offset-3">
              <img src="/assets/img/comments.svg" className="home__illustrationIcon" width="300" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
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
