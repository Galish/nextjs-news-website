import PropTypes from 'prop-types'
import cx from 'classnames'

import Author from './Author'
import Category from './Category'
import DateTime from './DateTime'
import Image from './Image'
import Text from './Text'

const PublicationPreview = ({
	author, category, description, image, published_at, source, title
}) => {

	return (
		<div className="flex my-4">
			{image && (
				<Image
					alt={title}
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

			<div className="flex-1">
				<div className="text-md sm:text-lg lg:text-2xl font-medium mb-2">
					{title}
				</div>

				{!image && (
					<Category isInline>
						{category}
					</Category>
				)}

				<div className="flex text-gray-400 text-sm mb-1">
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

				<Text>
					{description}
				</Text>
			</div>
		</div>
	)
}

PublicationPreview.propTypes = {
	author: PropTypes.string,
	category: PropTypes.string,
	country: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	language: PropTypes.string,
	published_at: PropTypes.string,
	source: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string
}

export default PublicationPreview
