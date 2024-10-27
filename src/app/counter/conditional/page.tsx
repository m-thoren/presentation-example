import CounterWithConditional from '@/components/Counters/CounterWithConditional'
import Main from '@/components/Main'

export default function ConditionalPage() {
	return (
		<Main
			title="Vi vill visa något när vi når ett visst antal klick"
			pageNumber={4}
			prevLink="/counter/props"
			nextLink="/counter/conditional/falsy"
		>
			<CounterWithConditional />
		</Main>
	)
}
