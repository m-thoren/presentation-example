import { getPerson } from '@/db/person'
import { type Person } from '@/schemas/common'
import { NextResponse } from 'next/server'

export async function GET(
	request: Request,
	{ params }: { params: { personId: string } },
) {
	const person = await getPerson(Number(params.personId))

	if (!person) {
		return NextResponse.json(
			{ message: 'Person hittades inte' },
			{ status: 404 },
		)
	}

	return NextResponse.json(person)
}
