import React, { FC } from 'react'
import TodoItem from './TodoItem'

type Todo = {
  id: number
  text: string
  completed: boolean
}

const TodoList: FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
