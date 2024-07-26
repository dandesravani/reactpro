import React from "react"

export const Product = ({name, votes, onVote}) => {
  return (
    <li>
      {name} - votes:{votes}
      <button onClick={() => onVote(name, 1)}>+</button>
      <button onClick={() => onVote(name, -1)}>-</button>
    </li>
  )
}

export const ProductList = ({products}) => {
  const [productsNew, set] = React.useState(products)
  const handleVote = (name, dir) => {
    set(
      productsNew.map(prod => {
        if (prod.name === name) {
          prod.votes += dir
        }
        return prod
      })
    )
    return productsNew
  }
  return (
    <ul>
      {productsNew.map(product => (
        <Product
          key={product.name}
          name={product.name}
          votes={product.votes}
          onVote={handleVote}
        />
      ))}
    </ul>
  )
}
