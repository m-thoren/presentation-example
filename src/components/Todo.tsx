'use client'

import { type ChangeEvent, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Check, Plus, Trash, X } from 'lucide-react'

type Todo = {
	id: string
	name: string
	done: boolean
}

const initialTodos: Array<Todo> = [
	{
		id: '1cd07621-e2c4-419d-ae93-4c24941458fe',
		name: 'Ha en presentation om React',
		done: false,
	},
	{
		id: '13a6855a-32cb-4dc4-b0a7-808cbd6b48cf',
		name: 'Mata katterna',
		done: true,
	},
	{
		id: '7de656da-5e26-4458-ad8a-a65b8f37702e',
		name: 'Köp blombukett',
		done: false,
	},
]

export default function Todo() {
	const [todoList, setTodoList] = useState(initialTodos)
	const [newName, setNewName] = useState('')

	function handleInput(event: ChangeEvent<HTMLInputElement>) {
		setNewName(event.target.value)
	}

	// function handleAddTodo() {
	// 	const newTodo: Todo = {
	// 		id: todoList.length,
	// 		name: newName,
	// 		done: false,
	// 	}
	// 	todoList.push(newTodo)
	// 	setTodoList(todoList)
	// 	setNewName('')
	// }

	// function handleRemoveTodo(id: Todo['id']) {
	// 	todoList.filter((todo) => todo.id !== id)
	// 	setTodoList(todoList)
	// }

	// function handleCompleteTodo(id: Todo['id']) {
	// 	const todoToUpdate = todoList.find((todo) => todo.id === id)
	// 	if (!todoToUpdate) return
	// 	todoToUpdate.done = !todoToUpdate.done
	// }

	function handleAddTodo() {
		const newTodo: Todo = {
			id: crypto.randomUUID(),
			name: newName,
			done: false,
		}
		setTodoList([...todoList, newTodo])
		setNewName('')
	}

	function handleRemoveTodo(id: Todo['id']) {
		const newTodoList = todoList.filter((todo) => todo.id !== id)
		setTodoList(newTodoList)
	}

	function handleCompleteTodo(id: Todo['id']) {
		setTodoList(
			todoList.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						done: !todo.done,
					}
				}
				return todo
			}),
		)
	}

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<div className="p-2">
				<p>Lägg till ny todo:</p>
				<div className="flex flex-row gap-2">
					<Input value={newName} onChange={handleInput} />
					<Button onClick={handleAddTodo} disabled={!newName}>
						<Plus />
					</Button>
				</div>
			</div>
			<ul className="flex min-w-96 flex-col gap-2">
				{todoList.map((todo) => (
					<li key={todo.id} className="flex flex-row gap-2">
						<span
							className={`flex-1 ${todo.done ? 'text-gray-300 line-through' : ''}`}
						>
							{todo.name}
						</span>
						<Button onClick={() => handleCompleteTodo(todo.id)}>
							{todo.done ? <X /> : <Check />}
						</Button>
						<Button
							variant={'destructive'}
							onClick={() => handleRemoveTodo(todo.id)}
						>
							<Trash />
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}
