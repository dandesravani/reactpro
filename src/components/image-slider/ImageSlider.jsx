import React from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import "./style.css"

export const ImageSlider = ({url, limit}) => {
  const [images, set] = React.useState([])
  const [currentSlide, setCurrentSlide] = React.useState(3)
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    try {
      setLoading(true)
      async function fecthImages() {
        const res = await fetch(`${url}/list?page=1&limit=${limit}`)
        const data = await res.json()
        if (data) {
          set(data)
          setLoading(false)
        }
      }
      fecthImages()
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }, [])

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  if (isLoading) {
    return <div className="loading">Loading</div>
  }
  if (error) {
    return <p className="error">{error}</p>
  }
  return (
    <div className="img-container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((img, index) => (
            <img
              key={img.id}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
              src={img.download_url}
              alt={img.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <div className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
              ></button>
            ))
          : null}
      </div>
    </div>
  )
}
