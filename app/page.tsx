'use client'

import React, { FC, useState } from 'react'
import TodoList from './components/TodoList'

type Todo = {
  id: number
  text: string
  completed: boolean
}

const Home: FC = () => {
  const [newTodo, setNewTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = () => {
    if (newTodo.trim() === '') return
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
    setNewTodo('')
  }

  return (
    <>
      <input
        type='text'
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder='Add a new todo'
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} />
    </>
  )
}

export default Home
