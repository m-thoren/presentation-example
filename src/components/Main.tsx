'use client'

import { type ReactNode } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Main({
	title,
	pageNumber,
	nextLink,
	prevLink,
	children,
}: {
	title: string
	pageNumber: number
	nextLink: string | undefined
	prevLink: string | undefined
	children: ReactNode
}) {
	return (
		<main className="flex flex-1 flex-col gap-8 px-16 py-8">
			<h1 className="text-6xl font-bold">
				{pageNumber}. {title}
			</h1>
			<div className="flex flex-1 flex-col gap-4">{children}</div>
			<footer className="flex flex-row items-center justify-between">
				{prevLink ? (
					<Button asChild variant={'secondary'}>
						<Link href={prevLink}>
							<ArrowLeft />
							Tillbaka
						</Link>
					</Button>
				) : (
					<Button variant={'secondary'} disabled>
						<ArrowLeft />
						Tillbaka
					</Button>
				)}
				{nextLink ? (
					<Button asChild>
						<Link href={nextLink}>
							Nästa
							<ArrowRight />
						</Link>
					</Button>
				) : (
					<Button disabled>
						Nästa
						<ArrowRight />
					</Button>
				)}
			</footer>
		</main>
	)
}
