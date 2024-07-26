import React from "react"

function useFetch(url) {
  const [data, set] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await fetch(url)
        const data = await res.json()
        if (data) {
          setLoading(false)
          set(data)
        }
      } catch (e) {
        setLoading(false)
        setError(e.message)
      }
    }
    fetchData()
  }, [url])

  return {data, isLoading, error}
}

export default useFetch
