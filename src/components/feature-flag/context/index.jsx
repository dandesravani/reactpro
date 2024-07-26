import React from "react"
import dummyApiResponseCall from "../data"

export const createFeatureFlagContext = React.createContext()

export const CreateFeatureFlag = ({children}) => {
  const [loading, setLoading] = React.useState(false)
  const [enabledFlags, setEnabledFlags] = React.useState()

  React.useEffect(() => {
    async function fetchDummyApiResponse() {
      try {
        setLoading(true)
        const res = await dummyApiResponseCall()
        setEnabledFlags(res)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        throw new Error(e)
      }
    }
    fetchDummyApiResponse()
  }, [])

  return (
    <createFeatureFlagContext.Provider value={{loading, enabledFlags}}>
      {children}
    </createFeatureFlagContext.Provider>
  )
}
