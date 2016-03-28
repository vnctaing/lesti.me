import Signup from '../signup/Signup.jsx'

const Home = (props) => {
    return (
        <div>
            <div className="home__illustration home">
                <div className="container">
                    <h1 className="home__headline">Votre estime sous forme de tableau</h1>
                    <div className="home__form-wrapper">
                        <h4 className="home__form-headline">Nouveau sur Lesti.me ? Inscrivez-vous</h4>
                        <Signup/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-flex--hcenter container-flex--space-between">
                    <div className="home__icon-container">
                        <i className="fa fa-arrow-up home__icon--green"></i>
                        <i className="fa fa-arrow-down home__icon--red"></i>
                    </div>
                    <div>Faites monter ou descendre vos amis de votre estime.</div>
                </div>
                <div className="container-flex--hcenter container-flex--space-between">
                    <div>
                        Votre estime est approuvé ou non par les visiteurs
                    </div>
                    <div className="home__icon-container">
                        <i className="fa fa-thumbs-up home__icon--green"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
