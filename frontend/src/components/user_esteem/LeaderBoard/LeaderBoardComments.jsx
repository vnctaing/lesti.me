import LabelIllustrated from './LabelIllustrated.jsx';
import { reduxForm } from 'redux-form';
import * as actionCreators from '../../../actions/action.js';
import { bindActionCreators } from 'redux';
import moment from 'moment';

let LeaderBoardComments = (props) => {
  const { fields: { author, content }, handleSubmit, comments } = props;

  const { showEstimationSection } = props.actions;
  function handleBackClick() {
    showEstimationSection(props.appraisee._id);
  }

  const commentsNode = comments.map((c) =>
    <div key={c._id}>
      <div className="float-right">
        <LabelIllustrated icon="fa-clock-o" label={moment(c.createdAt).fromNow()}/>
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
            <LabelIllustrated icon="fa-thumbs-o-up" label="0"/>
            <LabelIllustrated icon="fa-thumbs-o-down" label="0"/>
            <LabelIllustrated icon="fa-commenting-o" label="0"/>
          </div>
        </div>
        <hr/>
        { commentsNode }
        <div className="form-group">
          <div className="row">
            <div className="col-xs-6">
              <input className="form-control input-sm" type="text" {...author} placeholder="Auteur"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input className="form-control input-sm" type="text" {...content} placeholder="Écrire un commentaire..."/>
        </div>
        {/*<textarea className="form-control textarea--nonresizable" 
              value={content.value || ''}
              placeholder="Écrire un commentaire" 
              {...content}>
        </textarea>*/}
        <button className="btn btn-default btn--greenplain" onClick={handleSubmit}>Publier</button>
      </div>
    </form>
  )

}

LeaderBoardComments = reduxForm({
  form: `comment`,
  fields: ['author', 'content'], // a list of all your fields in your form
})(LeaderBoardComments)

export default LeaderBoardComments;