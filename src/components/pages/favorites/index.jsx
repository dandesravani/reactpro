import React from "react"
import {createFoodAppContext} from "../../context"

export const Favorites = () => {
  const {favorites, handleRemove} = React.useContext(createFoodAppContext)
  return (
    <div className="p-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favorites?.length > 0 ? (
        <div>
          {favorites.map(favorite => (
            <>
              <div
                key={favorite.id}
                className="h-150 border-2 shadow-xl bg-white/75 rounded-xl"
              >
                <div className="h-40 flex overflow-hidden justify-center items-center rounded-2xl">
                  <img
                    src={favorite?.image_url}
                    alt="image_url"
                    className="block w-full"
                  />
                </div>
                <div className="text-2xl text-black font-bold">
                  {favorite?.title}{" "}
                </div>
                <button
                  onClick={() => {
                    handleRemove(favorite?.id)
                  }}
                  className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white disabled:bg-slate-300"
                >
                  Remove
                </button>
              </div>
            </>
          ))}
        </div>
      ) : (
        <p className="lg:text-4xl text-center font-black">No Favorites Yet</p>
      )}
    </div>
  )
}
