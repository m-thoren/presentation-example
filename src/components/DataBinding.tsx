'use client'

import { type ChangeEvent, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Trash } from 'lucide-react'

export default function DataBinding() {
	const [text, setText] = useState('')

	function handleInput(event: ChangeEvent<HTMLInputElement>) {
		setText(event.target.value)
	}

	function handleClear() {
		setText('')
	}

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<p>Skriv en text:</p>
			<div className="flex flex-row gap-2">
				<Input onChange={handleInput} />
				<Button onClick={handleClear} disabled={!text}>
					Rensa <Trash />
				</Button>
			</div>
		</div>
	)
}
