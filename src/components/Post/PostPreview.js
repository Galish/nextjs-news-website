import PropTypes from 'prop-types'
import cx from 'classnames'

import Category from './Category'
import Image from './Image'
import Metadata from './Metadata'
import Text from './Text'
import Title from './Title'

const PostPreview = ({
	author, category, description, hideCategory, hideDescription, hideImage,
	hideMetadata, hideText, hideTitle, image, isVertical, linkTo, published_at,
	source, title
}) => (
	<div className={cx(
		'my-4',
		{
			'flex': !isVertical
		}
	)}>
		{!hideImage && (
			<Image
				alt={title}
				isResponsive={isVertical}
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
			{!hideTitle && (
				<Title linkTo={linkTo}>
					{title}
				</Title>
			)}

			{(hideImage || !image) && (
				<Category isInline>
					{!hideCategory && category}
				</Category>
			)}

			{!hideMetadata && (
				<Metadata
					author={author || source}
					publishedAt={published_at}
				/>
			)}

			{!hideText && (
				<Text
					length={120}
				>
					{!hideDescription && description}
				</Text>
			)}
		</div>
	</div>
)

PostPreview.propTypes = {
	author: PropTypes.string,
	category: PropTypes.string,
	country: PropTypes.string,
	description: PropTypes.string,
	hideCategory: PropTypes.bool,
	hideDescription: PropTypes.bool,
	hideImage: PropTypes.bool,
	hideMetadata: PropTypes.bool,
	hideText: PropTypes.bool,
	hideTitle: PropTypes.bool,
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
	hideText: false,
	hideTitle: false,
	isVertical: false
}

export default PostPreview
