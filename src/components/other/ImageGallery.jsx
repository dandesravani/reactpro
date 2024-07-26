import React from "react"

export default function ImageGallery({links}) {
  const handleClick = event => {
    event.target.parentElement.remove()
  }
  return (
    <ul>
      {links.map(link => (
        <li key={link}>
          <img src={link} />
          <button onClick={event => handleClick(event)}>X</button>
        </li>
      ))}
    </ul>
  )
}
