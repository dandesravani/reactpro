import React from "react"
import {UseOutsideClick} from "./UseOutsideClick"

export const UseOnclickOutsideTest = () => {
  const modelRef = React.useRef(null)
  const [showContent, set] = React.useState(false)
  UseOutsideClick(modelRef, () => set(false))
  return (
    <>
      {showContent ? (
        <div ref={modelRef}>
          <h2>This is random content</h2>
          <p>
            please click outside of this close button. It won't close of you
            click inside of this modal button
          </p>
        </div>
      ) : (
        <button onClick={() => set(true)}>Click Modal</button>
      )}
    </>
  )
}
