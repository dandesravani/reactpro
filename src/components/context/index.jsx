import React from "react"
import {useNavigate} from "react-router-dom"

export const createFoodAppContext = React.createContext(null)

export const FoodAppContext = ({children}) => {
  const [recipes, set] = React.useState([])
  const [searchParam, setSearch] = React.useState("banana")
  const [loading, setLoading] = React.useState(false)
  const [recipeDetails, setRecipeDetails] = React.useState(null)
  const [favorites, setFavorites] = React.useState([])

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      )
      const data = await res.json()

      if (data?.data?.recipes) {
        setLoading(false)
        set(data?.data?.recipes)
        setSearch("")
        navigate("/")
      }
    } catch (e) {
      console.log(e)
      setLoading(false)
      setSearch("")
    }
  }

  const handleFavorites = id => {
    const findFavorite = recipes.find(re => re.id === id)
    setFavorites([...favorites, findFavorite])
  }

  const handleRemove = id => {
    setFavorites(favorites.filter(fav => fav.id !== id))
  }

  return (
    <createFoodAppContext.Provider
      value={{
        recipes,
        searchParam,
        loading,
        recipeDetails,
        favorites,
        handleSubmit,
        setSearch,
        setRecipeDetails,
        handleFavorites,
        handleRemove
      }}
    >
      {children}
    </createFoodAppContext.Provider>
  )
}
