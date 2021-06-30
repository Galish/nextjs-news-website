import PropTypes from 'prop-types'
import cx from 'classnames'
import get from 'lodash.get'

import { CATEGORY_COLORS } from 'constants/colors'

const PostCategory = ({ children, className, defaultColor, isInline }) => {
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
			'px-2',
			'py-1',
			'text-white',
			'text-xs uppercase',
			[ `bg-${getColor(children)}` ],
			{
				'mb-5': isInline
			},
			className
		)}>
			{children}
		</div>
	)
}

PostCategory.propTypes = {
	className: PropTypes.string,
	defaultColor: PropTypes.string,
	isInline: PropTypes.bool
}

PostCategory.defaultProps = {
	defaultColor: 'blue-500',
	isInline: false
}

export default PostCategory
