import Image from 'next/image'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PublicationDateTime = ({ alt, children, className, height, isVertical, src, width }) => {
	if (!src) {
		return null
	}

	return (
		<div className={cx(
			'relative',
			className,
			{
				'w-28 lg:w-80 sm:w-56 mr-3 lg:mr-8 sm:mr-4': !isVertical
			}
		)}>
			<Image
				src={src}
				alt={alt}
				// layout="fill"
				// objectFit="cover"
				height={height}
				width={width}
				layout="responsive"
			/>

			{children}
		</div>
	)
}

PublicationDateTime.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	height: PropTypes.number,
	isVertical: PropTypes.bool,
	src: PropTypes.string,
	width: PropTypes.number
}

PublicationDateTime.defaultProps = {
	height: 200,
	isVertical: false,
	width: 300
}

export default PublicationDateTime
