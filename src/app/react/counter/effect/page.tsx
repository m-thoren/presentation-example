import Main from '@/components/Main'
import CounterWithToast from '@/components/Counters/CounterWithToast'

export default function CounterPage() {
	return (
		<Main
			title="Vi vill visa en notifikation efter ett visst antal klick"
			pageNumber={6}
			prevLink="/react/counter/conditional/falsy"
			nextLink="/react/counter/shared-state"
		>
			<CounterWithToast />
		</Main>
	)
}
