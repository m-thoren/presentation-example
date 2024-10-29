import Main from '@/components/Main'

export default function HomePage() {
	return (
		<Main
			title="Välkommen!"
			pageNumber={1}
			prevLink={undefined}
			nextLink="/react"
		>
			<h2>Agendan:</h2>
			<ul className="list-inside list-disc p-2">
				<li>Grundläggande React</li>
				<li>Grundläggande NextJS</li>
				<li>Frågor</li>
			</ul>
		</Main>
	)
}
