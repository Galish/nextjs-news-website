import HomePageLayout from 'components/Layout/HomePage'
import PostPreview from 'components/Post/Preview'

function PostPage(post) {
	return (
		<HomePageLayout>
			<PostPreview {...post} />
		</HomePageLayout>
	)
}

export default PostPage

export async function getStaticPaths() {
	const res = await fetch(`${process.env.HOST}/api/news`)
	const { data } = await res.json()
	const paths = data.map(({ id }) => ({
		params: {
			id
		}
	}))

	return {
		fallback: true,
		paths
	}
}

export async function getStaticProps({ params }) {
	const res = await fetch(`${process.env.HOST}/api/news`)
	const { data = [] } = await res.json()
	const post = data.find(({ id }) => id === params.id)

	if (!post) {
		return {
			notFound: true
		}
	}

	return {
		props: post
	}
}
