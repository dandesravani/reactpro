import React from 'react'

export default function Message () {
    const handleClick = () => {
        console.log("button clicked")
    }
    return (
        <button onClick={handleClick}>Click here</button>
    )
}