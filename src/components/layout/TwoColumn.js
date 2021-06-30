import Container from './Container'

const TwoColumn = ({ leftColumn, rightColumn }) => (
	<Container>
		<div className="flex">
			<div className="flex-1 pr-5">
				{leftColumn}
			</div>
			<div className="w-1/4 border-l border-gray-200 pl-5">
				{rightColumn}
			</div>
		</div>
	</Container>
)

export default TwoColumn
