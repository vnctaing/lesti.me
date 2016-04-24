import CounterFontAwesome from './CounterFontAwesome.jsx';
// import {Modal} from "react-bootstrap/lib/ModalHeader";
const ModalHeader = require("react-bootstrap/lib/ModalHeader");
const Modal = require('react-bootstrap/lib/Modal');
const ModalBody = require('react-bootstrap/lib/ModalBody')
const LeaderBoardRow = (props) => {
    const centeredPicture = {
      backgroundImage: `url(${props.appraisee.picture})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };
    const { updatingAppraiseeEsteem, closeAppraiseeUpdateModal, openAppraiseeUpdateModal } = props.actions;
    const { show_update_appraisee_esteem_modal } = props.user_esteem.ui;

    function handleClick(){
        openAppraiseeUpdateModal();
    }
    return (
        <div>
            <div className="leaderboard_row">
                <div>
                    {/*<img style={centeredPicture} className="img-rounded img-responsive"/> */}

                    <p className="leaderboard_name inline">{props.appraisee.appraiseeName}</p>
                    <p className="inline">{props.appraisee.name}, </p>
                    <div className="inline">
                        <p className="leaderboard__esteem inline text-right">{props.appraisee.esteem} pts <span>dans l'estime de Vincent</span></p>
                    </div>

                    <i className="fa fa-pencil leaderboard__icon--right"></i>
                    <p className="leaderboard__description">{props.appraisee.description}</p>
                    <div>
                        <CounterFontAwesome icon="fa-thumbs-o-up" count="0"/>
                        <CounterFontAwesome icon="fa-thumbs-o-down" count="0"/>
                        <CounterFontAwesome icon="fa-commenting-o" count="0"/>
                    </div>
                    <hr/>
                    <div className="leaderboard__ctaContainer">
                        <div className="leaderboard__cta inline leaderboard__cta--green">
                            <i className="fa fa-arrow-up inline" onClick={handleClick}></i>
                        </div>

                        <div className="leaderboard__cta inline leaderboard__cta--red">
                            <i className="fa fa-arrow-down inline"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show_update_appraisee_esteem_modal} onHide={closeAppraiseeUpdateModal}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Text in a modal</h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <h4>Overflowing text to show scroll behavior</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              </Modal.Body>
            </Modal>
        </div>
    )
}

export default LeaderBoardRow;