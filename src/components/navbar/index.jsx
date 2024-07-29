import React, {useContext} from "react"
import {NavLink} from "react-router-dom"
import {createFoodAppContext} from "../context"

export const Navbar = () => {
  const {searchParam, setSearch, handleSubmit, favorites} =
    useContext(createFoodAppContext)
  return (
    <nav className="flex justify-between items-center py-8 mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Food Recipe
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={e => setSearch(e.target.value)}
          className="p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          placeholder="Enter Items..."
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites{" "}
            {favorites.length > 0 ? (
              <span class="bg-teal-500 font-bold text-white text-center py-1 px-2 text-xs rounded">
                {favorites?.length}
              </span>
            ) : null}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
