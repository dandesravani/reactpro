import React from "react"
import {Recipe} from "./Recipe"

export const RecipeList = ({recipes, onRecipeClick}) => {
  return (
    <ul>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <Recipe
            recipe={recipe}
            onRecipeClick={() => onRecipeClick(recipe.id)}
          />
        </div>
      ))}
    </ul>
  )
}
