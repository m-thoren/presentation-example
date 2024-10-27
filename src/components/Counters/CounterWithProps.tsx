'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

export default function CounterWithProps({
	initialValue,
}: {
	initialValue: number
}) {
	const [count, setCount] = useState(initialValue)

	function handleClick() {
		setCount(count + 1)
	}

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<div>Antal klick: {count}</div>
			<Button onClick={handleClick}>+1</Button>
		</div>
	)
}
