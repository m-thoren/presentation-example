'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

export default function CountersWithContext() {
	const [count, setCount] = useState(0)

	function handleClick() {
		setCount(count + 1)
	}

	return (
		<div className="flex flex-row items-center justify-center gap-20">
			<Counter count={count} handleClick={handleClick} />
			<MockComponent1 count={count} handleClick={handleClick} />
		</div>
	)
}

type CounterProps = {
	count: number
	handleClick: () => void
}

function Counter({ count, handleClick }: CounterProps) {
	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<div>Antal klick: {count}</div>
			<Button onClick={handleClick}>+1</Button>
		</div>
	)
}

function MockComponent1({ count, handleClick }: CounterProps) {
	return (
		<div className="rounded-md bg-green-900 p-4">
			Komponent 1
			<MockComponent2 count={count} handleClick={handleClick} />
		</div>
	)
}

function MockComponent2({ count, handleClick }: CounterProps) {
	return (
		<div className="rounded-md bg-blue-900 p-4">
			Komponent 2
			<MockComponent3 count={count} handleClick={handleClick} />
		</div>
	)
}

function MockComponent3({ count, handleClick }: CounterProps) {
	return (
		<div className="rounded-md bg-purple-900 p-4">
			Komponent 3
			<div className="rounded-md bg-background p-4">
				<MockComponentLeaf count={count} handleClick={handleClick} />
			</div>
		</div>
	)
}

function MockComponentLeaf({ count, handleClick }: CounterProps) {
	return (
		<div>
			<Counter count={count} handleClick={handleClick} />
		</div>
	)
}
