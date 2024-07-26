import React from "react"
import {Tabs} from "./TabsList"

function RandomComponent() {
  return <h1>Some random content</h1>
}

const tabs = [
  {
    label: "Tab 1",
    content: <div>This is content for Tab 1</div>
  },
  {
    label: "Tab 2",
    content: <div>This is content for Tab 2</div>
  },
  {
    label: "Tab 3",
    content: <RandomComponent />
  }
]

export const TabTest = () => {
  const handleChange = currentIdx => {
    console.log
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />
}
