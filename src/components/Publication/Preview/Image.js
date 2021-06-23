import Image from 'next/image'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PublicationDateTime = ({ alt, children, className, height, src, width }) => {
	if (!src) {
		return null
	}

	return (
		<div className={cx(
			'lg:mr-8',
			'lg:w-80',
			'mr-3',
			'relative',
			'sm:mr-4',
			'sm:w-56',
			'w-28',
			className
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
	src: PropTypes.string,
	width: PropTypes.number
}

PublicationDateTime.defaultProps = {
	height: 200,
	width: 300
}

export default PublicationDateTime
