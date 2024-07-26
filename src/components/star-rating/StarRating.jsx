import React, {useState} from "react"
import {FaStar} from "react-icons/fa"
import "./style.css"

export const StarRating = ({noOfStars = 7}) => {
  const [rating, set] = React.useState(0)
  const [hover, setHover] = React.useState(0)

  const handleClick = index => {
    set(index)
  }
  const handleMouseMove = index => {
    setHover(index)
  }
  const handleMouseLeave = () => {
    setHover(rating)
  }
  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          )
        })}
      </div>
      <h3>Rating: {rating}</h3>
    </>
  )
}
