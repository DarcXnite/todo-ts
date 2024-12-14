import React, { FC } from 'react'

type Todo = {
  id: number
  text: string
  completed: boolean
}

const TodoItem: FC<{
  todo: Todo
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}> = ({ todo: { id, text, completed }, toggleTodo, deleteTodo }) => {
  return (
    <li key={id}>
      <span onClick={() => toggleTodo(id)}>{text}</span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}

export default TodoItem
