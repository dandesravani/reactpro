import React from "react"
import {MenuList} from "./MenuList"
import "./style.css"

export const TreeView = ({menus = []}) => {
  return (
    <div class="menu">
      {menus && menus.length !== 0 ? <MenuList list={menus} /> : null}
    </div>
  )
}
