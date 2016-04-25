const CounterFontAwesome = (props) => {
	const {icon, count} = props;
	const classNames = `${icon} fa leaderboard__icon inline`;
	return (
		<div className="inline leaderboard_commentsCount">
		    <i className={classNames}></i>
		    <p className="inline text-right">{count}</p>
		</div>
	)
}


export default CounterFontAwesome;