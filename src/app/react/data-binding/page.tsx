import DataBinding from '@/components/DataBinding'
import Main from '@/components/Main'

export default async function Person() {
	return (
		<Main
			title="Data bindning"
			pageNumber={10}
			prevLink="/react/counter/shared-state/context-provider/with-context"
			nextLink="/react/todo"
		>
			<DataBinding />
		</Main>
	)
}
