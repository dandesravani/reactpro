import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import "./index.css"
import {FoodAppContext} from "./components/context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FoodAppContext>
      <App />
    </FoodAppContext>
  </BrowserRouter>
)
