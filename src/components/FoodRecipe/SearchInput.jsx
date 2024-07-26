import React, {useState} from "react"

export const SearchInput = ({onSearch}) => {
  const [query, set] = useState("")

  return (
    <>
      <div>
        <input
          type="search"
          value={query}
          onChange={e => set(e.target.value)}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault()
            onSearch(query)
            set("")
          }}
        >
          Search
        </button>
      </div>
    </>
  )
}
