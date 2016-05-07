import LabelIllustrated from './LabelIllustrated.jsx';
import { reduxForm } from 'redux-form';
import * as actionCreators from '../../../actions/action.js';
import { bindActionCreators } from 'redux';

let LeaderBoardComments = (props) => {
	const { fields: {author, content}, handleSubmit } = props;

	const { showEstimationSection } = props.actions;
	function handleBackClick() {
		showEstimationSection(props.appraisee._id)
	}

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
			    <div>
			        <div className="float-right">
			            <LabelIllustrated icon="fa-clock-o" label="2 min"/>
			        </div>
			        <p>Michael Jordan</p>
			        <p className="leaderboard__comment">Excepteur exercitation in et ea in qui occaecat sit cupidatat veniam velit aliquip aliqua amet enim eiusmod minim ut tempor sit in non non laborum in veniam irure.</p>
			        <hr/>
			    </div>
			    <div>
			        <div className="float-right">
			            <LabelIllustrated icon="fa-clock-o" label="2 min"/>
			        </div>
			        <p>Taylor Swift</p>
			        <p className="leaderboard__comment">Excepteur exercitation in et ea in qui occaecat sit cupidatat veniam velit aliquip aliqua amet enim eiusmod minim ut tempor sit in non non laborum in veniam irure.</p>
			        <hr/>
			    </div>
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