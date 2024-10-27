import Counter from '@/components/Counters/Counter'
import Main from '@/components/Main'

export default function CounterPage() {
	return (
		<Main
			title="React-applikationer byggs med komponenter"
			pageNumber={2}
			prevLink="/react"
			nextLink="/react/counter/props"
		>
			<h2>Så vad är en komponent?</h2>
			<Counter />
		</Main>
	)
}
