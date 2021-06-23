import PropTypes from 'prop-types'
import cx from 'classnames'

const PublicationAuthor = ({ children, className }) => {
	if (!children) {
		return null
	}

	return (
		<div className={cx(
			'mb-2',
			'text-gray-400',
			'text-sm',
			className
		)}>
			By <span className="text-red-600">{children}</span>
		</div>
	)
}

PublicationAuthor.propTypes = {
	className: PropTypes.string
}

export default PublicationAuthor
