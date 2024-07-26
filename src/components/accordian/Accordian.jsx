import React from "react"
import "./style.css"

export const Accordian = ({
  enableMulti,
  multiple,
  selected,
  items,
  onEnableMulti,
  onMultiSelect,
  onItemClick
}) => {
  return (
    <div className="wrapper">
      <button onClick={() => onEnableMulti(enableMulti)}>
        {enableMulti ? "enabled" : "enable multi"}
      </button>
      <ul className="accordian">
        {items.map(item => (
          <div key={item.id} className="item">
            <li
              className="title"
              onClick={
                !enableMulti
                  ? () => onItemClick(item.id)
                  : () => onMultiSelect(item.id)
              }
            >
              <p>{item.question}</p>
              <span>+</span>
            </li>
            {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
              <p className="content">{item.answer}</p>
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  )
}
