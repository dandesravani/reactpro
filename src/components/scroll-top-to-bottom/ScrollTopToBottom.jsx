import React from "react"
import useFetch from "../custom-hooks/use-fetch/useFetch"

export const ScrollTopToBottom = () => {
  const {data, isLoading, error} = useFetch("https://dummyjson.com/products")
  const bottomRef = React.useRef(null)

  {
    isLoading ? <h3>Pending ! Please wait</h3> : null
  }
  {
    error ? <h3>{error}</h3> : null
  }

  const handleTopClick = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }

  const handleBottomClick = () => {
    bottomRef.current.scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is Top Section</h3>
      <button onClick={handleBottomClick}>Scroll bottom</button>
      <div>
        {data && data.products && data.products.length
          ? data.products.map(productItem => (
              <p key={productItem.title}>{productItem.title}</p>
            ))
          : null}
      </div>
      <button onClick={handleTopClick}>Scroll Top</button>
      <div ref={bottomRef}></div>
      <h3>This is Bottom Section</h3>
    </>
  )
}
