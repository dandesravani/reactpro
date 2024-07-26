export const TodoList = ({todos, onItemClick, onDelete}) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        const style = todo.completed ? {textDecoration: "line-through"} : {}
        return (
          <>
            <li key={index} onClick={() => onItemClick(todo)} style={style}>
              {todo.name}
            </li>
            <button onClick={() => onDelete(todo)}>X</button>
          </>
        )
      })}
    </ul>
  )
}

export default TodoList
