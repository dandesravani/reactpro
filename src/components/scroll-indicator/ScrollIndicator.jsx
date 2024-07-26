import React from "react"
import "./style.css"

export const ScrollIndicator = ({url}) => {
  const [productTitles, set] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [scrollPercentage, setScrollPercentage] = React.useState(0)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const res = await fetch(url)
        const data = await res.json()
        if (data && data.products && data.products.length !== 0) {
          console.log(data.products.title)
          setLoading(false)
          set(data.products.map(prod => prod.title))
        }
      } catch (e) {
        console.log(e.message)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [url])

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // )

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    setScrollPercentage((howMuchScrolled / height) * 100)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage)

    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  console.log(scrollPercentage)
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{width: `${scrollPercentage}%`}}
          ></div>
        </div>
      </div>
      <div className="product-wrapper">
        {productTitles.map(title => (
          <div>{title}</div>
        ))}
      </div>
    </div>
  )
}
