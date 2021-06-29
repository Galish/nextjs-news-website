import PropTypes from 'prop-types'
import cx from 'classnames'

import Author from './Author'
import Category from './Category'
import DateTime from './DateTime'
import Image from './Image'
import Text from './Text'
import Title from './Title'

const PostPreview = ({
	author, category, description, hideCategory, hideDescription, hideImage,
	hideMetadata, image, isVertical, linkTo, published_at, source, title
}) => {
	return (
		<div className={cx(
			'my-4',
			{
				'flex': !isVertical
			}
		)}>
			{!hideImage && (
				<Image
					alt={title}
					isVertical={isVertical}
					linkTo={linkTo}
					src={image}
				>
					<Category className={cx(
						'absolute',
						'left-0',
						'sm:left-3',
						'sm:top-3',
						'top-0',
						'z-10',
					)}>
						{category}
					</Category>
				</Image>
			)}

			<div className={cx({
				'flex-1': !isVertical,
				'mt-2': isVertical
			})}>
				<Title linkTo={linkTo}>
					{title}
				</Title>

				{(hideImage || !image) && (
					<Category isInline>
						{!hideCategory && category}
					</Category>
				)}

				{!hideMetadata && (
					<div className="flex text-gray-400 text-sm mb-1 flex-wrap">
						<Author>
							{author || source}
						</Author>

						{!!(author || source) && published_at && (
							<div className="mx-1">
								&mdash;
							</div>
						)}

						<DateTime>
							{published_at}
						</DateTime>
					</div>
				)}

				<Text>
					{!hideDescription && description}
				</Text>
			</div>
		</div>
	)
}

PostPreview.propTypes = {
	author: PropTypes.string,
	category: PropTypes.string,
	country: PropTypes.string,
	description: PropTypes.string,
	hideCategory: PropTypes.bool,
	hideDescription: PropTypes.bool,
	hideImage: PropTypes.bool,
	hideMetadata: PropTypes.bool,
	image: PropTypes.string,
	isVertical: PropTypes.bool,
	language: PropTypes.string,
	linkTo: PropTypes.string,
	published_at: PropTypes.string,
	source: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string
}

PostPreview.defaultProps = {
	hideCategory: false,
	hideDescription: false,
	hideImage: false,
	hideMetadata: false,
	isVertical: false
}

export default PostPreview