import CountersWithContext from '@/components/Counters/CountersWithContext'
import Main from '@/components/Main'

export default function CounterPage() {
	return (
		<Main
			title="Context Provider"
			pageNumber={9}
			prevLink="/react/counter/shared-state/context-provider"
			nextLink="/react/data-binding"
		>
			<CountersWithContext />
		</Main>
	)
}
