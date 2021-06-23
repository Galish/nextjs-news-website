import PropTypes from 'prop-types'
import moment from 'moment'

const PublicationDateTime = ({ children, className, format }) => {
	if (!children) {
		return null
	}

	return (
		<div className={className}>
			{moment(children).format(format)}
		</div>
	)
}

PublicationDateTime.propTypes = {
	className: PropTypes.string,
	format: PropTypes.string
}

PublicationDateTime.defaultProps = {
	format: 'LL'
}

export default PublicationDateTime
