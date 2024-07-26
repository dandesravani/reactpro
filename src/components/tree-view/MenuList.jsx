import React from "react"
import {MenuItem} from "./MenuItem"
import "./style.css"

export const MenuList = ({list = []}) => {
  return (
    <ul className="menu-list">
      {list && list.length
        ? list.map((item, idx) => <MenuItem key={idx} item={item} />)
        : null}
    </ul>
  )
}
