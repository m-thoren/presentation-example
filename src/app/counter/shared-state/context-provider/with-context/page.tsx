import CountersWithContext from '@/components/Counters/CountersWithContext'
import Main from '@/components/Main'

export default function CounterPage() {
	return (
		<Main
			title="Context Provider"
			pageNumber={9}
			prevLink="/counter/shared-state/context-provider"
			nextLink="/person"
		>
			<CountersWithContext />
		</Main>
	)
}
