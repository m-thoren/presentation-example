'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

export default function Counter() {
	const [count, setCount] = useState(0)

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
