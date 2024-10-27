import Main from '@/components/Main'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

import Link from 'next/link'

export default async function Person() {
	return (
		<Main
			title="Server Rendering"
			pageNumber={2}
			prevLink="/nextjs"
			nextLink="/person"
		>
			<p>Sök efter en person:</p>
			<Button asChild>
				<Link href={'/nextjs/person/1'}>
					Mathias <ArrowRight />
				</Link>
			</Button>
			<Button asChild>
				<Link href={'/nextjs/person/2'}>
					Bob
					<ArrowRight />
				</Link>
			</Button>
		</Main>
	)
}
