import Main from '@/components/Main'
import Todo from '@/components/Todo'

export default async function Person() {
	return (
		<Main
			title="Rendera listor"
			pageNumber={11}
			prevLink="/react/data-binding"
			nextLink="/nextjs"
		>
			<Todo />
		</Main>
	)
}
