import React from "react"

export const Recipe = ({recipe, onRecipeClick}) => {
  return (
    <>
      <li>
        <img src={recipe.image} />
      </li>
      <h3>{recipe.title}</h3>
      <button onClick={() => onRecipeClick(recipe.id)}>View Recipe</button>
    </>
  )
}
