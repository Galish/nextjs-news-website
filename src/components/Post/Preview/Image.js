import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PostImage = ({
	alt, children, className, height, isVertical, linkTo, src, width
}) => {
	if (!src) {
		return null
	}

	const renderImage = () => (
		<Image
			src={src}
			alt={alt}
			// layout="fill"
			// objectFit="cover"
			height={height}
			width={width}
			layout="responsive"
		/>
	)

	return (
		<div className={cx(
			'relative',
			className,
			{
				'w-28 lg:w-80 sm:w-56 mr-3 lg:mr-8 sm:mr-4': !isVertical
			}
		)}>
			{linkTo
				? (
					<Link href={linkTo}>
						<a>
							{renderImage()}
						</a>
					</Link>
				)
				: renderImage()
			}

			{children}
		</div>
	)
}

PostImage.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	height: PropTypes.number,
	isVertical: PropTypes.bool,
	linkTo: PropTypes.string,
	src: PropTypes.string,
	width: PropTypes.number
}

PostImage.defaultProps = {
	height: 200,
	isVertical: false,
	width: 300
}

export default PostImage
