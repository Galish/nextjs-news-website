import Container from 'components/Layout/Container'
import TwoColumnLayout from 'components/Layout/TwoColumn'
import PostPreview from 'components/Post/PostPreview'
import Post from 'components/Post/Post'

function PostPage(post) {
	return (
		<>
			<Container>
				<Post
					{...post}
					hideText
					hideMetadata
				/>
			</Container>

			<TwoColumnLayout
				leftColumn={
					<Post
						{...post}
						hideImage
						hideTitle
					/>
				}
				rightColumn={
					<div>
						Some text here
					</div>
				}
			/>
		</>
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
