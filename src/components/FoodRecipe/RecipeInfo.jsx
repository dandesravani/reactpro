import React from "react"

export const RecipeInfo = ({recipe}) => {
  return (
    <>
      <span>Servings: {recipe.servings}</span>
      <span>Ready In Minutes: {recipe.readyInMinutes}</span>
    </>
  )
}
