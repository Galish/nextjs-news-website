import Link from 'next/link'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PostTitle = ({ children, className, linkTo, size }) => {
	if (!children) {
		return null
	}

	return (
		<div className={cx(
			{
				'text-md font-medium sm:text-lg lg:text-2xl mb-2': size === 'medium',
				'text-3xl font-medium mb-5 lg:text-5xl lg:mb-10 xl:text-8xl': size === 'large'
			},
			className,
		)}>
			{linkTo
				? (
					<Link href={linkTo}>
						<a className="hover:underline">
							{children}
						</a>
					</Link>
				)
				: children
			}
		</div>
	)
}

PostTitle.propTypes = {
	className: PropTypes.string,
	linkTo: PropTypes.string,
	size: PropTypes.oneOf([ 'small', 'medium', 'large' ])
}

PostTitle.defaultProps = {
	size: 'medium'
}

export default PostTitle
