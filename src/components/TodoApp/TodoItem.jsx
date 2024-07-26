import React from "react"

export const TodoItem = ({onSubmit}) => {
  const [todoNew, set] = React.useState({name: "", completed: false})
  const handleChange = e => {
    set({...todoNew, name: e.target.value})
  }
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add a task..."
          value={todoNew.name}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault()
            onSubmit(todoNew)
            set({...todoNew, name: ""})
          }}
        >
          Add
        </button>
      </form>
    </>
  )
}

export default TodoItem
