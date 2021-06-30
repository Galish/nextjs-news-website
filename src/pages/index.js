import Caption from 'components/Layout/Caption'
import PostPreview from 'components/Post/PostPreview'
import TwoColumnLayout from 'components/Layout/TwoColumn'
import WidgetTitle from 'components/Layout/WidgetTitle'

function HomePage({ data }) {
	return (
		<TwoColumnLayout
			leftColumn={
				<>
					<Caption color="red-500">
						Top stories
					</Caption>

					{data.slice(0, 25).map(publication => (
						<PostPreview
							key={publication.id}
							linkTo={`/post/${publication.id}`}
							{...publication}
						/>
					))}
				</>
			}
			rightColumn={
				<>
					<WidgetTitle>
						Our pick
					</WidgetTitle>

					{data.slice(0, 5).map(publication => (
						<PostPreview
							key={publication.id}
							// hideCategory
							hideDescription
							// hideImage
							// hideMetadata
							isVertical
							{...publication}
						/>
					))}
				</>
			}
		/>
	)
}

export default HomePage

export async function getStaticProps(context) {
	const res = await fetch(`${process.env.HOST}/api/news`)
	const data = await res.json()

	return {
		props: data
	}
}
