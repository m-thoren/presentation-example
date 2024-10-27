import { type Pet } from '@/schemas/common'

export async function getPet(petId: number): Promise<Pet | undefined> {
	if (petId === 1) {
		await wait(1)
		return {
			id: 1,
			name: 'Lasse',
			age: 2,
			type: 'cat',
		}
	}
	if (petId === 2) {
		await wait(3)
		return {
			id: petId,
			name: 'Bosse',
			age: 0,
			type: 'cat',
		}
	}
	return undefined
}

async function wait(seconds: number) {
	await new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}
