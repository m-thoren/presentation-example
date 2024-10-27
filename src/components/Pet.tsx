import { getPet } from '@/db/pet'
import { petSchema } from '@/schemas/common'

export default async function PetInfo({ petId }: { petId: number }) {
	const petRes = await getPet(petId)

	const parsedPet = petSchema.safeParse(petRes)
	if (!parsedPet.success) {
		return <p>Kunde inte visa husdjur</p>
	}

	const pet = parsedPet.data

	return (
		<div>
			{pet.name} är {pet.type === 'cat' ? 'en katt' : 'en hund'} och är{' '}
			{pet.age} år!
		</div>
	)
}
