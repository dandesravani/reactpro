/* we can access DOM element directly using useRef for that we need to use ref attritude on the element to access it directly in the DOM */

import React from "react"

// export default function AccessDOMElement() {
//   const inputRef = React.useRef()

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={() => inputRef.current.focus()}>Focus</button>
//     </>
//   )
// }

/* focusable input without button. if the shouldFocus variable is true then it input element should focus */

export default function FocusableInput({shouldFocus}) {
  const inputRef = React.useRef()
  React.useEffect(() => {
    if (shouldFocus) {
      inputRef.current.focus()
    }
  }, [])
  return <input ref={inputRef} />
}
