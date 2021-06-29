import Caption from 'components/Layout/Caption'
import HomePageLayout from 'components/Layout/HomePage'
import PostPreview from 'components/Post/Preview'
import WidgetTitle from 'components/Layout/WidgetTitle'

function HomePage({ data }) {
	return (
		<HomePageLayout>
			<div className="flex">
				<div className="flex-1 pr-5">
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
				</div>
				<div className="w-1/4 border-l border-gray-200 pl-5">
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
				</div>
			</div>
		</HomePageLayout>
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
