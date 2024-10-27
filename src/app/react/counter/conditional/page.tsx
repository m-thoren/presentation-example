import CounterWithConditional from '@/components/Counters/CounterWithConditional'
import Main from '@/components/Main'

export default function ConditionalPage() {
	return (
		<Main
			title="Vi vill visa något när vi når ett visst antal klick"
			pageNumber={4}
			prevLink="/react/counter/props"
			nextLink="/react/counter/conditional/falsy"
		>
			<CounterWithConditional />
		</Main>
	)
}
