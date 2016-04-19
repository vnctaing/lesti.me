import Signup from '../signup/Signup.jsx'

const Home = (props) => {
    return (
        <div>
            <div className="home__illustration home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="home__title">Estimez vos amis</h1>
                        </div>
                        <div className="col-md-4">
                            <h2 className="home__title">S'inscrire</h2>
                            <Signup/>
                        </div>
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
                            <div className="home__highlight home__highlight--right">Faites monter ou descendre vos amis de votre estime.</div>
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
}



/**
 *                 <div className="container-flex--hcenter container-flex--space-between">

                    
                </div>
                <div className="container-flex--hcenter container-flex--space-between">

                    <div className="home__icon-container">
                        
                    </div>
                </div>
 */
export default Home;
