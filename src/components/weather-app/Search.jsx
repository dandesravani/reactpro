import React from "react"
import "./style.css"

export const Search = ({onSubmitSearch}) => {
  const [search, set] = React.useState("Mumbai")
  return (
    <div className="search">
      <input
        type="text"
        placeholder="enter city name..."
        name="search"
        value={search}
        onChange={e => set(e.target.value)}
      />
      <button onClick={() => onSubmitSearch(search)}>Search</button>
    </div>
  )
}
