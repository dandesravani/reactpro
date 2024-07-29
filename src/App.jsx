// import "./App.css"
import Fruits from "./components/other/Fruits"
import Hello from "./components/other/Fruits"
import {ProductList} from "./components/other/GroceryStore"
import ImageGallery from "./components/other/ImageGallery"
import Message from "./components/other/Message"
import {TodoList} from "./components/TodoApp/TodoList"
// import TodoItem, {FinalTodo} from "./components/TodoApp/TodoItem"
import FocusableInput from "./components/useRef/AccessDOMElement"
import AccessDOMElement from "./components/useRef/AccessDOMElement"
import PersistPreviousState from "./components/useRef/PersistPreviousState"
import {TodoApp} from "./components/TodoApp/TodoApp"
import {SearchInput} from "./components/FoodRecipe/SearchInput"
import {RecipeApp} from "./components/FoodRecipe/RecipeApp"
import {Accordian} from "./components/accordian/Accordian"
import {AccordianList} from "./components/accordian/AccordianList"
import {data} from "./components/accordian/data"
import {RandomColor} from "./components/random-color/RandomColor"
import {StarRating} from "./components/star-rating/StarRating"
import {ImageSlider} from "./components/image-slider/ImageSlider"
import {LoadMoreData} from "./components/load-more/LoadMoreData"
import {StrictMode} from "react"
import {TreeView} from "./components/tree-view/TreeView"
import menus from "./components/tree-view/data"
import {QrGenerator} from "./components/qr-generator/QrGenerator"
import {ThemeChange} from "./components/theme-changing/ThemeChange"
import {ScrollIndicator} from "./components/scroll-indicator/ScrollIndicator"
import {TabTest} from "./components/custom-tabs/Tabs"
import {Modal} from "./components/custom-modal/Modal"
import {CustomModal} from "./components/custom-modal/CustomModal"
import {Profile} from "./components/github-profile-finder/Profile"
import {AutoComplete} from "./components/auto-complete/AutoComplete"
import {FeatureFlags} from "./components/feature-flag"
import {CreateFeatureFlag} from "./components/feature-flag/context"
import UseFetchHookTest from "./components/custom-hooks/use-fetch/test"
import {UseOnclickOutsideTest} from "./components/custom-hooks/use-outside-click/test"
import {UseWindowResizeTest} from "./components/custom-hooks/use-window-resize/test"
import {ScrollTopToBottom} from "./components/scroll-top-to-bottom/ScrollTopToBottom"
import {ScrollToSection} from "./components/scroll-top-to-bottom/ScrollToSection"
import {Search} from "./components/weather-app/Search"
import {WeatherApp} from "./components/weather-app/Weather"
import {Routes, Route} from "react-router-dom"
import {Home} from "./components/pages/home"
import {Details} from "./components/pages/details"
import {Favorites} from "./components/pages/favorites"
import {Navbar} from "./components/navbar"

// const fruits = [
//   {name: "apple", price: 7, soldOut: true},
//   {name: "mango", price: 8, soldOut: false},
//   {name: "orange", price: 8, soldOut: false},
//   {name: "banana", price: 8, soldOut: true}
// ]

// const items = [
//   {text: "sleep", done: true},
//   {text: "eat", done: true},
//   {text: "run", done: false}
// ]

// const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"]

// const products = [
//   {name: "Oranges", votes: 0},
//   {name: "Apples", votes: 0},
//   {name: "Bananas", votes: 0}
// ]

// const url = "https://picsum.photos/v2"
// const limit = 5

{
  /* <CreateFeatureFlag>
        <FeatureFlags />
      </CreateFeatureFlag> */
}

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
