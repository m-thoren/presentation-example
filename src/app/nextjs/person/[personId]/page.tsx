import PetInfo from '@/components/Pet'
import { Button } from '@/components/ui/button'
import { getPerson } from '@/db/person'
import { personSchema } from '@/schemas/common'
import { ArrowLeft, Loader } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function ShowPerson({
	params,
}: {
	params: { personId: string }
}) {
	const personRes = await getPerson(Number(params.personId))

	const parsedPerson = personSchema.safeParse(personRes)
	if (!parsedPerson.success) {
		return (
			<div className="flex flex-1 flex-col gap-4 p-8">
				<div className="rounded-md bg-foreground p-8 text-background">
					Kunde inte visa person
				</div>
				<Button asChild variant={'secondary'}>
					<Link href={'/nextjs/person'}>
						Gå tillbaka
						<ArrowLeft />
					</Link>
				</Button>
			</div>
		)
	}

	const person = parsedPerson.data

	return (
		<div className="flex flex-1 flex-col gap-4 p-8">
			<div className="rounded-md bg-foreground p-8 text-background">
				{person.name} är {person.age} år!
			</div>
			{person.petIds && person.petIds.length > 0 ? (
				<div className="rounded-md bg-gray-300 p-4 text-background">
					<p>
						{person.name} har {person.petIds.length} husdjur:
					</p>
					{person.petIds.map((petId) => (
						<Suspense
							key={petId}
							fallback={
								<div className="flex flex-row items-center">
									Hämtar husdjur{' '}
									<Loader className="animate-spin" />
								</div>
							}
						>
							<PetInfo petId={petId} />
						</Suspense>
					))}
				</div>
			) : (
				<p>{person.name} har inga husdjur</p>
			)}
			<Button asChild variant={'secondary'}>
				<Link href={'/nextjs/person'}>
					Gå tillbaka
					<ArrowLeft />
				</Link>
			</Button>
		</div>
	)
}
