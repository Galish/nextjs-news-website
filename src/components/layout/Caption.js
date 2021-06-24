import PropTypes from 'prop-types'
import cx from 'classnames'

const Caption = ({ children, color }) => (
	<div className={cx(
		'border-b-2',
		'font-medium',
		'text-sm',
		'text-white',
		`border-${color}`,
	)}>
		<div className={cx(
			'inline-block px-5 py-2 uppercase mb-px',
			`bg-${color}`
		)}>
			{children}
		</div>
	</div>
)

Caption.propTypes = {
	color: PropTypes.string
}

Caption.defaultProps = {
	color: 'black'
}

export default Caption
