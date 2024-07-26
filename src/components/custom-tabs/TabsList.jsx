import React from "react"
import "./style.css"

export const Tabs = ({tabsContent, onChange}) => {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0)

  const handleOnClick = idx => {
    setCurrentTabIndex(idx)
    onChange(idx)
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{color: "red"}}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  )
}
