import LabelIllustrated from './LabelIllustrated.jsx';
import { reduxForm } from 'redux-form';
import * as actionCreators from '../../../actions/action.js';
import { bindActionCreators } from 'redux';
import moment from 'moment';

let LeaderBoardComments = (props) => {
  const { fields: { author, content }, comments, initialize } = props;

  const { showEstimationSection } = props.actions;
  function handleBackClick() {
    showEstimationSection(props.appraisee._id);
  }

  const { postingComment } = props.commentActions;

  function handleCommentSubmit(data) {
    initialize('comment', {}, ['author', 'content']);
    const req = Object.assign({}, data, { _appraisee: props.appraisee._id });
    postingComment(req);
  }

  const commentsNode = comments.map((c) =>
    <div key={c._id}>
      <div className="float-right">
        <LabelIllustrated icon="fa-clock-o" label={moment(c.createdAt).fromNow()} />
      </div>
      <p>{c.author}</p>
      <p className="leaderboard__comment">{c.content}</p>
      <hr />
    </div>
  );


  return (
    <form action="">
      <div>
        <div className="container-flex--space-between container-flex--inline">
          <div className="lst-cursor" onClick={handleBackClick}>
            <i className="fa fa-chevron-left"></i>
          </div>
          <div>
            <LabelIllustrated icon="fa-thumbs-o-up" label="0" />
            <LabelIllustrated icon="fa-thumbs-o-down" label="0" />
            <LabelIllustrated icon="fa-commenting-o" label="0" />
          </div>
        </div>
        <hr />
        {commentsNode}
        <div className="form-group">
          <div className="row">
            <div className="col-xs-6">
              <input
                {...author}
                type="text"
                className="form-control input-sm"
                placeholder="Auteur"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            {...content}
            className="form-control input-sm"
            type="text"
            placeholder="Écrire un commentaire..."
          />
        </div>
        <button className="btn btn-default btn--greenplain" onClick={handleCommentSubmit}>Publier</button>
      </div>
    </form>
  );
};

LeaderBoardComments = reduxForm({
  form: 'comment',
  fields: ['author', 'content'], // a list of all your fields in your form
})(LeaderBoardComments);

export default LeaderBoardComments;
