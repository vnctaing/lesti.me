const LabelIllustrated = (props) => {
	const {icon, label} = props;
	const classNames = `${icon} fa leaderboard__icon inline`;
	return (
		<div className="inline leaderboard_commentsCount">
		    <i className={classNames}></i>
		    <p className="inline text-right">{label}</p>
		</div>
	)
}


export default LabelIllustrated;