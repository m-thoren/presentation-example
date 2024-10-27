import Main from '@/components/Main'

export default function HomePage() {
	return (
		<Main
			title="Stund för frågor 🥳"
			pageNumber={1}
			prevLink={'/nextjs/build-api'}
			nextLink={undefined}
		>
			<p>Har vi några frågor?</p>
		</Main>
	)
}
