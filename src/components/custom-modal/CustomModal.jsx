import React from "react"
import {Modal} from "./Modal"

export const CustomModal = () => {
  const [openModal, set] = React.useState(false)

  const handleClose = () => {
    set(false)
  }

  return (
    <div>
      <button onClick={() => set(!openModal)}>Open Modal</button>
      <p>{openModal && <Modal onClose={handleClose} />}</p>
    </div>
  )
}
