import CountersWithNoContext from '@/components/Counters/CountersWithNoContext'
import Main from '@/components/Main'

export default function CounterPage() {
	return (
		<Main
			title="Hur kan vi dela state om en komponent är långt ner i strukturen?"
			pageNumber={8}
			prevLink="/react/counter/shared-state"
			nextLink="/react/counter/shared-state/context-provider/with-context"
		>
			<CountersWithNoContext />
		</Main>
	)
}
