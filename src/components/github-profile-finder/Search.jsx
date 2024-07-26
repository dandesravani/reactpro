import React from "react"
import "./github.css"

export const SearchInput = ({onSearch}) => {
  const [search, set] = React.useState("")
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        value={search}
        onChange={e => set(e.target.value)}
        placeholder="Search Github Username"
      />
      <button
        className="button"
        onClick={e => {
          e.preventDefault()
          onSearch(search)
        }}
      >
        Search
      </button>
    </div>
  )
}
