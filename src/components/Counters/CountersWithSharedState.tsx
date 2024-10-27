'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

export default function CountersWithSharedState() {
	const [count, setCount] = useState(0)

	function handleClick() {
		setCount(count + 1)
	}

	return (
		<div className="flex flex-row items-center justify-center gap-20">
			<Counter count={count} handleClick={handleClick} />
			<Counter count={count} handleClick={handleClick} />
		</div>
	)
}

function Counter({
	count,
	handleClick,
}: {
	count: number
	handleClick: () => void
}) {
	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<div>Antal klick: {count}</div>
			<Button onClick={handleClick}>+1</Button>
		</div>
	)
}
