import CounterWithProps from '@/components/Counters/CounterWithProps'
import Main from '@/components/Main'

export default function CounterPage() {
	return (
		<Main
			title="Hur skickar vi data till en komponent?"
			pageNumber={3}
			prevLink="/counter"
			nextLink="/counter/conditional"
		>
			<CounterWithProps initialValue={12} />
		</Main>
	)
}
