import React from "react"

export const TodoItem = ({todo, onSubmit}) => {
  const [todoNew, set] = React.useState(todo)
  const handleChange = e => {
    set(e.target.value)
  }
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add a task..."
          value={todoNew}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault()
            onSubmit(todoNew)
            set("")
          }}
        >
          Add
        </button>
      </form>
    </>
  )
}

export const FinalTodo = () => {
  const [todo, set] = React.useState("")
  const handleSubmit = todoNew => {
    set(todoNew)
  }
  return (
    <>
      <TodoItem todo={todo} onSubmit={handleSubmit} />
      <p>Name:{todo}</p>
    </>
  )
}

export default FinalTodo
