import React from "react"
import {Search} from "./Search"
import "./style.css"
import useFetch from "../custom-hooks/use-fetch/useFetch"

export const WeatherApp = () => {
  const [search, setSearch] = React.useState("mumbai")

  const {data, isLoading, error} = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
  )

  {
    isLoading ? <h3 className="loading">Pending ! Please wait</h3> : null
  }
  {
    error ? <h3>{error}</h3> : null
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })
  }

  return (
    <div className="container-weather">
      <Search onSubmitSearch={setSearch} />
      <div className="weather-container">
        <h2 className="city">
          {data?.name}, <span>{data?.sys?.country}</span>
        </h2>
        <div className="date">
          <span>{getCurrentDate()}</span>
        </div>
        <div className="temp">
          <h1>{data?.main.temp}</h1>
          <h3>{data?.weather[0]?.description}</h3>
        </div>
        <div className="bottom-container">
          <div className="wind-container">
            <h3 className="wind">{data?.wind?.speed}</h3>
            <h3>Wind Speed</h3>
          </div>
          <div className="humidity-container">
            <h3 className="humidity">{data?.main?.humidity}</h3>
            <h3>Humididty</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
