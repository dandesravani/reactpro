import React from "react"
import {MenuList} from "./MenuList"
import "./style.css"

export const MenuItem = ({item}) => {
  const [hideButton, set] = React.useState(false)
  return (
    <li className="item">
      <p>{item.label}</p>
      {item && item.children ? (
        <>
          <button onClick={() => set(!hideButton)}>
            {hideButton ? "-" : "+"}
          </button>
          {hideButton ? <MenuList list={item.children} /> : null}
        </>
      ) : null}
    </li>
  )
}
