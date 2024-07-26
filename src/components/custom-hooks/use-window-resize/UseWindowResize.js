import React from "react"

export const useWindowResize = () => {
  const [windowSize, set] = React.useState({width: 0, height: 0})

  React.useLayoutEffect(() => {
    function handleResize() {
      set({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}
