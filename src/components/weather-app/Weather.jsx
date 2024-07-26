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
    isLoading ? <h3>Pending ! Please wait</h3> : null
  }
  {
    error ? <h3>{error}</h3> : null
  }

  console.log(data)
  return (
    <div className="container">
      <Search onSubmitSearch={setSearch} />
      <div className="weather-container">
        <h2 className="city">{data.name}</h2>
        <div className="temp">
          <h1>{data.main.temp}</h1>
          <h3>{data.weather[0].description}</h3>
        </div>
        <div className="bottom-container">
          <div className="wind">
            <h3>{data.wind.speed}</h3>
            <h3>Wind Speed</h3>
          </div>
          <div className="humidity">
            <h3>{data.main.humidity}</h3>
            <h3>Humididty</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
