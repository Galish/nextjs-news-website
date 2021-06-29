import PropTypes from 'prop-types'
import cx from 'classnames'
import get from 'lodash.get'

import { CATEGORY_COLORS } from 'constants/colors'

const PostCategory = ({ children, className, defaultColor }) => {
	if (!children) {
		return null
	}

	const getColor = category => get(
		CATEGORY_COLORS,
		category.toLowerCase(),
		defaultColor
	)

	return (
		<div className={cx(
			'inline-block',
			'mb-5',
			'px-2',
			'py-1',
			'text-white',
			'text-xs uppercase',
			[ `bg-${getColor(children)}` ],
			className
		)}>
			{children}
		</div>
	)
}

PostCategory.propTypes = {
	className: PropTypes.string,
	defaultColor: PropTypes.string
}

PostCategory.defaultProps = {
	defaultColor: 'blue-500'
}

export default PostCategory