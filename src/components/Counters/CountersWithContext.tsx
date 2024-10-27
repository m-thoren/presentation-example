'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'
import { Button } from '../ui/button'

export default function CountersWithContext() {
	return (
		<div className="flex flex-row items-center justify-center gap-20">
			<CounterProvider>
				<Counter />
				<MockComponent1 />
			</CounterProvider>
		</div>
	)
}

function Counter() {
	const { count, increaseCount } = useCounter()

	function handleClick() {
		increaseCount()
	}

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<div>Antal klick: {count}</div>
			<Button onClick={handleClick}>+1</Button>
		</div>
	)
}

type CounterContext = {
	count: number
	increaseCount: () => void
}

const CounterContext = createContext<CounterContext | undefined>(undefined)

const useCounter = () => {
	const context = useContext(CounterContext)
	if (!context) {
		throw new Error('useCounter kan bara användas inom en CounterProvider')
	}
	return context
}

const CounterProvider = ({ children }: { children: ReactNode }) => {
	const [count, setCount] = useState(0)

	function increaseCount() {
		setCount((prev) => prev + 1)
	}

	return (
		<CounterContext.Provider value={{ count, increaseCount }}>
			{children}
		</CounterContext.Provider>
	)
}

function MockComponent1() {
	return (
		<div className="rounded-md bg-green-900 p-4">
			Komponent 1
			<MockComponent2 />
		</div>
	)
}

function MockComponent2() {
	return (
		<div className="rounded-md bg-blue-900 p-4">
			Komponent 2
			<MockComponent3 />
		</div>
	)
}

function MockComponent3() {
	return (
		<div className="rounded-md bg-purple-900 p-4">
			Komponent 3
			<div className="rounded-md bg-background p-4">
				<MockComponentLeaf />
			</div>
		</div>
	)
}

function MockComponentLeaf() {
	return (
		<div>
			<Counter />
		</div>
	)
}
