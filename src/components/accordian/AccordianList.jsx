import React from "react"
import {Accordian} from "./Accordian"
import {data} from "./data"

export const AccordianList = () => {
  const [selected, setSelected] = React.useState(0)
  const [isEnableMulti, setMultiEnable] = React.useState(false)
  const [multiple, set] = React.useState([])

  const handleItemClick = id => {
    setSelected(id === selected ? null : id)
  }

  const handleEnableMulti = isEnable => {
    setMultiEnable(!isEnable)
  }

  const handleMulti = id => {
    const copyMulti = [...multiple]
    const findIdx = copyMulti.indexOf(id)

    if (findIdx === -1) copyMulti.push(id)
    else copyMulti.splice(findIdx, 1)
    set(copyMulti)
  }
  console.log(selected, multiple, isEnableMulti)

  return (
    <>
      <Accordian
        items={data}
        enableMulti={isEnableMulti}
        selected={selected}
        multiple={multiple}
        onEnableMulti={handleEnableMulti}
        onItemClick={handleItemClick}
        onMultiSelect={handleMulti}
      />
    </>
  )
}
