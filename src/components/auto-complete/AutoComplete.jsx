import React from "react"

export const AutoComplete = () => {
  const [users, set] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [name, setName] = React.useState("")

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true)
        const res = await fetch(`https://dummyjson.com/users`)
        const data = await res.json()
        console.log(data, "data")
        if (data) {
          setLoading(false)
          set(data.users)
        }
      } catch (e) {
        setError(e.message)
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (isLoading) {
    return <div className="loading">Loading</div>
  }
  if (error) {
    return <p className="error">{error}</p>
  }

  const fullNames = users.map(user => `${user.firstName} ${user.lastName}`)
  const usernames =
    name !== ""
      ? fullNames.filter(user =>
          user.toLowerCase().includes(name.toLowerCase())
        )
      : []

  return (
    <div>
      <input
        type="search"
        placeholder="search name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <ul>
        {usernames.map((name, index) => (
          <li key={index} style={{listStyle: "none"}}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
