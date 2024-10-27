import { z } from 'zod'

const idSchema = z.number()

export const petSchema = z.object({
	id: idSchema,
	name: z.string(),
	age: z.number(),
	type: z.enum(['cat', 'dog']),
})
export type Pet = z.infer<typeof petSchema>

export const personSchema = z.object({
	id: idSchema,
	name: z.string(),
	age: z.number(),
	petIds: z.array(idSchema).optional(),
})
export type Person = z.infer<typeof personSchema>
