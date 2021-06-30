import PropTypes from 'prop-types'
import moment from 'moment'

const PostDateTime = ({ children, className, format }) => {
	if (!children) {
		return null
	}

	return (
		<div className={className}>
			{moment(children).format(format)}
		</div>
	)
}

PostDateTime.propTypes = {
	className: PropTypes.string,
	format: PropTypes.string
}

PostDateTime.defaultProps = {
	format: 'LL'
}

export default PostDateTime
