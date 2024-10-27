import Main from '@/components/Main'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Person() {
	return (
		<Main
			title="Bygg ditt eget api"
			pageNumber={3}
			prevLink="/nextjs/person"
			nextLink="/qa"
		>
			<Button asChild>
				<Link href="/api/person/1">Hämta person genom api</Link>
			</Button>
		</Main>
	)
}
