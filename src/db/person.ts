import { type Person } from '@/schemas/common'

export async function getPerson(personId: number): Promise<Person | undefined> {
	if (personId !== 1) return undefined
	return {
		id: personId,
		name: 'Mathias',
		age: 27,
		petIds: [1, 2],
	}
}
