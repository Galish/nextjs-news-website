import PropTypes from 'prop-types'
import cx from 'classnames'

import Author from './Author'
import DateTime from './DateTime'

const PostMetadata = ({ author, className, publishedAt }) => {
	if (!author && !publishedAt) {
		return null
	}

	return (
		<div className={cx(
			'flex text-gray-400 text-sm mb-4 flex-wrap',
			className
		)}>
			<Author>
				{author}
			</Author>

			{!!author && !!publishedAt && (
				<div className="mx-1">
					&mdash;
				</div>
			)}

			<DateTime>
				{publishedAt}
			</DateTime>
		</div>
	)
}

PostMetadata.propTypes = {
	author: PropTypes.string,
	className: PropTypes.string,
	linkTo: PropTypes.string,
	publishedAt: PropTypes.string
}

export default PostMetadata
