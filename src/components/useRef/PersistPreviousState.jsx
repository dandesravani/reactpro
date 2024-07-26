/* useRef is used to track the previous state values. we are able to persist useRef values between renders */

import React from "react"

export default function PersistPreviousState() {
  const [count, set] = React.useState(0)
  const previousStateCount = React.useRef(0)

  React.useEffect(() => {
    previousStateCount.current = count
  }, [count])

  return (
    <>
      <button onClick={() => set(count + 1)}>click</button>
      <p>current:{count}</p>
      <p>previous:{previousStateCount.current}</p>
    </>
  )
}
