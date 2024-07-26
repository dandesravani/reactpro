import React from "react"
import "./style.css"

export const LoadMoreData = () => {
  const [products, set] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [count, setCount] = React.useState(0)
  const [error, setError] = React.useState(null)
  const [disabled, setDisabled] = React.useState(false)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const res = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        )
        const data = await res.json()
        console.log(data, "data")
        if (data && data.products && data.products.length) {
          set(prevProd => set([...prevProd, ...data.products]))
          setLoading(false)
        }
      } catch (e) {
        setError(e.message)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [set, count])

  React.useEffect(() => {
    if (products && products.length === 100) {
      setDisabled(true)
    }
  }, [products])

  if (isLoading) {
    return <div className="loading">Loading</div>
  }
  if (error) {
    return <p className="error">{error}</p>
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((prod, index) => (
              <div className="product" key={index}>
                <img src={prod.thumbnail} alt={prod.thumbnail} />
                <p>{prod.title}</p>
              </div>
            ))
          : null}
      </div>
      <>
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
        {disabled ? <p>you have reached to max points</p> : null}
      </>
    </div>
  )
}
