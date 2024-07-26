import React from "react"
import {useWindowResize} from "./UseWindowResize"

export const UseWindowResizeTest = () => {
  const windowSize = useWindowResize()
  return (
    <>
      <h1>Use Window Resize Hook</h1>
      <p>hieght:{windowSize.height}</p>
      <p>width:{windowSize.width}</p>
    </>
  )
}
