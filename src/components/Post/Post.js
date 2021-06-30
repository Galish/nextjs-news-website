import PropTypes from 'prop-types'
import cx from 'classnames'

import Category from './Category'
import Image from './Image'
import Metadata from './Metadata'
import Text from './Text'
import Title from './Title'

const PostDetail = ({
	author, category, description, hideCategory, hideDescription, hideImage,
	hideMetadata, hideText, hideTitle, image, isVertical, linkTo, published_at,
	source, title
}) => (
	<div className="pb-10">
		{!hideTitle && (
			<Title size="large">
				{title}
			</Title>
		)}

		{!hideImage && (
			<Image
				alt={title}
				className="mb-5"
				isResponsive
				linkTo={linkTo}
				src={image}
			/>
		)}

		{!hideMetadata && !hideCategory && (
			<div className="flex items-center">
				{!hideMetadata && (
					<Metadata
						author={author || source}
						publishedAt={published_at}
					/>
				)}

				{!hideCategory && (
					<Category
						className="mb-4 ml-auto"
					>
						{!hideCategory && category}
					</Category>
				)}
			</div>
		)}

		{!hideText && (
			<Text
				className="text-gray-700"
				size="large"
			>
				{!hideDescription && description}
			</Text>
		)}
	</div>
)

PostDetail.propTypes = {
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
	language: PropTypes.string,
	linkTo: PropTypes.string,
	published_at: PropTypes.string,
	source: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string
}

PostDetail.defaultProps = {
	hideCategory: false,
	hideDescription: false,
	hideImage: false,
	hideMetadata: false,
	hideText: false,
	hideTitle: false
}

export default PostDetail
