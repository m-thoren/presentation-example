import CountersWithNoContext from '@/components/Counters/CountersWithNoContext'
import Main from '@/components/Main'

export default function CounterPage() {
	return (
		<Main
			title="Hur kan vi dela state om en komponent är lång ner i strukturen?"
			pageNumber={8}
			prevLink="/counter/shared-state"
			nextLink="/counter/shared-state/context-provider/with-context"
		>
			<CountersWithNoContext />
		</Main>
	)
}
