import PropTypes from 'prop-types'
import cx from 'classnames'

const PostText = ({ children, className, length, size }) => {
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
			'text-gray-500',
			{
				'hidden sm:block ': size === 'medium',
				'text-lg lg:text-xl xl:text-2xl': size === 'large'
			},
			className
		)}>
			{length && truncate(children) || children}
		</div>
	)
}

PostText.propTypes = {
	className: PropTypes.string,
	length: PropTypes.number,
	size: PropTypes.oneOf([ 'small', 'medium', 'large' ])
}

PostText.defaultProps = {
	size: 'medium'
}

export default PostText
