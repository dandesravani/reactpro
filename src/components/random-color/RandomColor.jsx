import React from "react"

export const RandomColor = () => {
  const [typeOfColor, set] = React.useState("HEX")
  const [color, setColor] = React.useState("#000000")

  function utilityRandomGenerator(length) {
    return Math.floor(Math.random() * length)
  }

  const getRandomHexColor = () => {
    let hex = "#"
    const arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ]
    for (let i = 0; i < 6; i += 1) {
      hex += arr[utilityRandomGenerator(arr.length)]
    }
    setColor(hex)
  }

  const getRandomRgbColor = () => {
    const r = utilityRandomGenerator(256)
    const g = utilityRandomGenerator(256)
    const b = utilityRandomGenerator(256)
    setColor(`rgb(${r},${g},${b})`)
  }

  React.useEffect(() => {
    if (typeOfColor === "HEX") {
      getRandomHexColor()
    } else {
      getRandomRgbColor()
    }
  }, [typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        alignItems: "center"
      }}
    >
      <button onClick={() => set("HEX")}>Create HEX color</button>
      <button onClick={() => set("RGB")}>Create RGB color</button>
      <button
        onClick={typeOfColor === "HEX" ? getRandomHexColor : getRandomRgbColor}
      >
        get random color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          justifyContent: "center",
          gap: "20px",
          fontSize: "60px",
          marginTop: "50px",
          alignItems: "center"
        }}
      >
        <h3>{typeOfColor === "RGB" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}
