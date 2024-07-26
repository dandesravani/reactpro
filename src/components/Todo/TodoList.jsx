import React from "react"
import TodoItem from "./TodoItem"

export default function TodoList({items, onListClick, onItemClick}) {
  const handleItemClick = (e, item) => {
    if (item.done) {
      e.stopPropagation()
    } else {
      onItemClick(e, item)
    }
  }
  return (
    <ul onClick={onListClick}>
      {items.map(t => (
        <TodoItem
          key={t.text}
          item={t}
          onItemClick={e => handleItemClick(e, t)}
        />
      ))}
    </ul>
  )
}
