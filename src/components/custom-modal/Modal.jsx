import React from "react"
import "./style.css"

export const Modal = ({id, header, body, footer, onClose}) => {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="modal-close-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? body : <div>This is our modal body</div>}
        </div>
        <div className="footer">
          {footer ? footer : <h2>This is Our Modal Footer</h2>}
        </div>
      </div>
    </div>
  )
}
