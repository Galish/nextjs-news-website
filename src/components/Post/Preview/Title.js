import Link from 'next/link'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PostTitle = ({ children, className, linkTo }) => {
	if (!children) {
		return null
	}

	return (
		<div className={cx(
			'text-md sm:text-lg lg:text-2xl font-medium mb-2',
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
	linkTo: PropTypes.string
}

export default PostTitle
