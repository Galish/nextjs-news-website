import Image from 'next/image'

import HomePageLayout from 'components/layout/HomePage'

function HomePage({ data }) {
	return (
		<HomePageLayout>
			<ul>
				{data.map(({ image, published_at, title }) => (
					<li
						className="py-2.5 hover:bg-gray-100 flex items-center"
						key={title + published_at}
					>
						{image && (
							<div className="w-24 h-12 relative mr-2">
								<Image
									src={image}
									alt={title}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						)}

						{title}
					</li>
				))}
			</ul>
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
