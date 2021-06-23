import HomePageLayout from 'components/layout/HomePage'
import PublicationPreview from 'components/Publication/Preview'

function HomePage({ data }) {
	return (
		<HomePageLayout>
			{data.map(publication => (
				<PublicationPreview
					key={publication.title + publication.published_at}
					{...publication}
				/>
			))}
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
