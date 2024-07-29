import React from "react"

export const ThemeChange = () => {
  const [themeColor, set] = React.useState(false)
  const style = themeColor
    ? {
        backgroundColor: "white",
        color: "black"
      }
    : {backgroundColor: "black", color: "white"}
  const buttonStyle = themeColor
    ? {backgroundColor: "black", color: "white"}
    : {
        backgroundColor: "white",
        color: "black"
      }
  return (
    <div style={{height: "100vh"}}>
      <div style={style}>
        <h2>Hello world</h2>
        <button
          style={buttonStyle}
          onClick={() => {
            console.log(themeColor)
            set(!themeColor)
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
  )
}
