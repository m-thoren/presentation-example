import CountersWithSharedState from '@/components/Counters/CountersWithSharedState'
import Main from '@/components/Main'

export default function CounterPage() {
	return (
		<Main
			title="Vi vill att flera komponenter har tillgång till samma state"
			pageNumber={7}
			prevLink="/counter/effect"
			nextLink="/counter/shared-state/context-provider"
		>
			<CountersWithSharedState />
		</Main>
	)
}
