'use client'

import { toast } from 'sonner'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

export default function CounterWithToast() {
	const [count, setCount] = useState(0)

	function handleClick() {
		setCount(count + 1)
	}

	useEffect(() => {
		if (count === 5) {
			toast.info('Du har klickat en massa')
		}
	}, [count])

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<div>Antal klick: {count}</div>
			<Button onClick={handleClick}>+1</Button>
		</div>
	)
}
