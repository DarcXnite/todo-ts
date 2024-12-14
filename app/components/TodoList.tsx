import React, { FC } from 'react'
import TodoItem from './TodoItem'

type Todo = {
  id: number
  text: string
  completed: boolean
}

const TodoList: FC<{
  todos: Todo[]
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
