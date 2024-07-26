import React from "react"
import {createFeatureFlagContext} from "./context"
import {AccordianList} from "../accordian/AccordianList"
import {RandomColor} from "../random-color/RandomColor"
import {QrGenerator} from "../qr-generator/QrGenerator"
// import {TabTest} from "../custom-tabs/Tabs"

export const dummyApiResponse = {
  showAccordian: false,
  showCustomTabs: true,
  showQrGenerator: true,
  showRandomColor: true,
  showThemeChanging: false
}

export const FeatureFlags = () => {
  const {loading, enabledFlags} = React.useContext(createFeatureFlagContext)

  const componentsToRender = [
    {key: "showAccordian", component: <AccordianList />},
    {key: "showRandomColor", component: <RandomColor />},
    {key: "showQrGenerator", component: <QrGenerator />}
    // {key: "showCustomTabs", component: <TabTest />}
  ]

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map(componenItem =>
        enabledFlags[componenItem.key] ? componenItem.component : null
      )}
    </div>
  )
}
