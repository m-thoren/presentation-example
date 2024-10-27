import Main from '@/components/Main'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

import Link from 'next/link'

export default async function Person() {
	return (
		<Main
			title="NextJS"
			pageNumber={10}
			prevLink="/counter/shared-state/context-provider/with-context"
			nextLink="/person"
		>
			<Button asChild>
				<Link href={'/person/1'}>
					Mathias <ArrowRight />
				</Link>
			</Button>
			<Button asChild>
				<Link href={'/person/2'}>
					Bob
					<ArrowRight />
				</Link>
			</Button>
		</Main>
	)
}
