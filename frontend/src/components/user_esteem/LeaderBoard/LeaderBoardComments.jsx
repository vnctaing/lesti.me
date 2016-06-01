import LabelIllustrated from '../../icons/LabelIllustrated.jsx';
import { reduxForm } from 'redux-form';
import * as actionCreators from '../../../actions/action.js';
import { bindActionCreators } from 'redux';
import AddCommentForm from './AddCommentForm';
import Comment from './Comment.jsx';
import moment from 'moment';

const LeaderBoardComments = (props) => {
  const { comments } = props;

  const { showEstimationSection } = props.actions;
  function handleBackClick() {
    showEstimationSection(props.appraisee._id);
  }

  const { postingComment } = props.commentActions;

  function handleCommentSubmit(data) {
    const req = Object.assign({}, data, { _appraisee: props.appraisee._id });
    postingComment(req);
  }

  return (
      <div>
        <div className="container-flex--space-between container-flex--inline">
          <div className="lst-cursor" onClick={handleBackClick}>
            <i className="fa fa-chevron-left"></i>
          </div>
          <div>
            <LabelIllustrated icon="fa-thumbs-o-up" label="0" />
            <LabelIllustrated icon="fa-thumbs-o-down" label="0" />
            <LabelIllustrated icon="fa-commenting-o" label={comments.length} />
          </div>
        </div>
        <hr />
        {comments.map((c) => <Comment key={c._id} comment={c} />)}
        <AddCommentForm onSubmit={handleCommentSubmit} />
      </div>
  );
};

export default LeaderBoardComments;
