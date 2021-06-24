import PropTypes from 'prop-types'
import cx from 'classnames'

const WidgetTitle = ({ children, color }) => (
	<div className={cx(
		'font-medium',
		'mb-px',
		'px-5',
		'py-3',
		'text-sm',
		'text-white',
		'uppercase',
		`bg-${color}`,
	)}>
		{children}
	</div>
)

WidgetTitle.propTypes = {
	color: PropTypes.string
}

WidgetTitle.defaultProps = {
	color: 'black'
}

export default WidgetTitle
