import React from "react"
import TodoItem from "./TodoItem"
import {TodoList} from "./TodoList"

export const TodoApp = () => {
  const [todos, set] = React.useState([])
  const handleSubmit = todo => {
    set([...todos, todo])
  }
  const handleItemClick = todo => {
    set(
      todos.map(t => {
        if (t.name === todo.name) {
          t.completed = !t.completed
        }
        return t
      })
    )
    return todos
  }
  const handleDelete = todo => {
    set(todos.filter(t => todo !== t))
  }
  const completedTodos = todos.filter(todo => todo.completed)
  const sortedTods = todos.slice().sort((a, b) => a.completed - b.completed)
  return (
    <>
      <TodoItem onSubmit={handleSubmit} />
      <TodoList
        todos={sortedTods}
        onItemClick={handleItemClick}
        onDelete={handleDelete}
      />
      <p>Total Todos: {todos.length}</p>
      <p>Completed Todos: {completedTodos.length}</p>
    </>
  )
}

export default TodoApp
