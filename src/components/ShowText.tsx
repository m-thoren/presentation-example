'use client'

import { useState } from 'react'

export default function ShowText({ text }: { text: string }) {
	const [showText, setShowText] = useState(false)

	return (
		<div className="flex h-56 flex-col items-center justify-start gap-2">
			<button
				className="rounded-lg bg-blue-900 p-4 hover:bg-blue-700"
				onClick={() => setShowText((prev) => !prev)}
			>
				{showText ? 'Göm' : 'Visa'} text
			</button>
			{showText && <p className="text-lg text-white">{text}</p>}
		</div>
	)
}
