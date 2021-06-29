import PropTypes from 'prop-types'
import cx from 'classnames'

const PostText = ({ children, className, length }) => {
	if (!children) {
		return null
	}

	const truncate = text => {
		let index = text.indexOf(' ', length)

		if (index < 0) {
			return text
		}

		index = text.substring(0, index).lastIndexOf(' ')

		return `${text.substring(0, index)}...`
	}

	return (
		<div className={cx(
			'hidden',
			'sm:block',
			'text-gray-500',
			className
		)}>
			{truncate(children)}
		</div>
	)
}

PostText.propTypes = {
	className: PropTypes.string,
	length: PropTypes.number
}

PostText.defaultProps = {
	length: 150
}

export default PostText