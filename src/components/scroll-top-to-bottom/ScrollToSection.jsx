import React from "react"

const data = [
  {
    label: "First Card",
    style: {
      width: "100%",
      height: "600px",
      background: "red"
    }
  },
  {
    label: "Second Card",
    style: {
      width: "100%",
      height: "600px",
      background: "grey"
    }
  },
  {
    label: "Third Card",
    style: {
      width: "100%",
      height: "600px",
      background: "blue"
    }
  },
  {
    label: "Fourth Card",
    style: {
      width: "100%",
      height: "600px",
      background: "green"
    }
  },
  {
    label: "Fifth Card",
    style: {
      width: "100%",
      height: "600px",
      background: "orange"
    }
  }
]

export const ScrollToSection = () => {
  const ref = React.useRef(null)

  const handleSectionClick = () => {
    let top = ref.current.getBoundingClientRect().top
    window.scrollTo({top: top, behavior: "smooth"})
  }
  return (
    <>
      <h1>Scroll To Perticular Section</h1>
      <button onClick={handleSectionClick} style={{marginBottom: "10px"}}>
        Click To Scroll
      </button>
      <div>
        {data.map((dataItem, index) => (
          <div
            ref={index === 4 ? ref : null}
            key={dataItem.label}
            style={dataItem.style}
          >
            {dataItem.label}
          </div>
        ))}
      </div>
    </>
  )
}
