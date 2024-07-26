import React from "react"

export default function TodoItem({item, onItemClick}) {
  return <li onClick={onItemClick}>{item.text}</li>
}
