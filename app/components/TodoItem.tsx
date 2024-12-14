import React, { FC } from 'react'

type Todo = {
  id: number
  text: string
  completed: boolean
}

const TodoItem: FC<{ todo: Todo }> = ({ todo: { id, text, completed } }) => {
  return (
    <li key={id}>
      <span>{text}</span>
      <button>Delete</button>
    </li>
  )
}

export default TodoItem
