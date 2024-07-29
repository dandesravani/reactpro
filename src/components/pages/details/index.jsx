import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import {createFoodAppContext} from "../../context"

export const Details = () => {
  const {id} = useParams()
  const {recipeDetails, setRecipeDetails, handleFavorites, favorites} =
    useContext(createFoodAppContext)

  React.useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      )
      const data = await res.json()

      if (data?.data) {
        setRecipeDetails(data?.data)
      }
    }
    fetchRecipe()
  }, [id])
  const findFavorite = favorites.find(fav => fav.id === id)
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => {
              handleFavorites(id)
            }}
            disabled={favorites.includes(findFavorite)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white disabled:bg-slate-300"
          >
            {favorites.includes(findFavorite)
              ? "Added to Favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetails?.recipe?.ingredients.map(ingredient => (
              <li key={ingredient.description}>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
