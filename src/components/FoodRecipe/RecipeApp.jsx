import React from "react"
import {SearchInput} from "./SearchInput"
import {RecipeList} from "./RecipeList"
import {RecipeInfo} from "./RecipeInfo"

export const RecipeApp = () => {
  const [foodItems, setItems] = React.useState([])
  const [query, set] = React.useState("pizza")
  const [id, setId] = React.useState("")
  const [recipe, setRecipe] = React.useState({servings: 0, readyInMinutes: 0})

  const url = "https://api.spoonacular.com/recipes/complexSearch"
  const API_KEY = "15a32c49e4e74757b21ed08d6951666e"

  React.useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`)
      const data = await res.json()
      setItems(data.results)
    }
    fetchFood()
  }, [query])

  React.useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
      )
      const data = await res.json()
      console.log(data)
      setRecipe({servings: data.servings, readyInMinutes: data.readyInMinutes})
    }
    fetchRecipe()
  }, [id])

  const handleSubmit = query => {
    set(query)
  }

  const handleRecipeClick = id => {
    setId(id)
  }

  return (
    <>
      <SearchInput onSearch={handleSubmit} />
      <RecipeList
        recipes={foodItems.slice(0, 2)}
        onRecipeClick={handleRecipeClick}
      />
      <RecipeInfo recipe={recipe} />
    </>
  )
}
