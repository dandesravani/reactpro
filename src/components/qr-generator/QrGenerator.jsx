import React from "react"
import "./style.css"
import QRCode from "react-qr-code"

export const QrGenerator = () => {
  const [value, set] = React.useState("")
  const [qrCode, setQrcode] = React.useState(value)
  return (
    <div className="container">
      <div className="wrapper">
        <h1>QR Code Generator</h1>
        <div className="input-bundle">
          <input
            type="text"
            value={value}
            onChange={e => set(e.target.value)}
          />
          <button
            onClick={() => {
              setQrcode(value)
              set("")
            }}
          >
            Generate
          </button>
        </div>
        <QRCode value={qrCode} />
      </div>
    </div>
  )
}
