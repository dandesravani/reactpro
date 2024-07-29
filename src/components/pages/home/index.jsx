import React, {useContext} from "react"
import {createFoodAppContext} from "../../context"
import {RecipeItem} from "../../RecipeItem"

export const Home = () => {
  const {recipes, loading} = useContext(createFoodAppContext)

  if (loading) {
    return <div>Loading...Please wait!</div>
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes?.length > 0 ? (
        recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <p className="lg:text-4xl text-center text-black text-xl font-extrabold">
          Nothing to show. Please search something else!
        </p>
      )}
    </div>
  )
}
