import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("movie");
  const searchItems = (searchTerm) => {
    setSearch(searchTerm);
  };
  const handleChange = (types) => {
    setSelected(types.target.value);
  };
  const searchQ = `search?q=${search}&type=${selected}`;

  // const navigate = NavLink;
  return (
    <>
      <div className="bg-black">
        <header className="container flex justify-between items-center ">
          <div>
            <h2 className="font-extrabold text-4xl ">
              <NavLink to="/">CINEZONE</NavLink>
            </h2>
          </div>
          <ul className="flex ">
            <li className="hover:text-yellow-400 px-4">
              <NavLink to="/">Now Playing</NavLink>
            </li>
            <li className="hover:text-yellow-400 px-4">
              <NavLink to="movies/popular">Popular Movies</NavLink>
            </li>
            <li className="hover:text-yellow-400">
              <NavLink to="tv/popular">Popular TV Shows</NavLink>
            </li>
          </ul>
        </header>
      </div>
      <section className="search">
        <div className="container text-center">
          <div id="alert"></div>
          <form className="search-form">
            <div className="search-radio">
              <input
                type="radio"
                id="movie"
                name="type"
                value="movie"
                checked={selected === "movie"}
                onChange={handleChange}
              />
              Movies
              <input
                type="radio"
                id="tv"
                name="type"
                value="tv"
                checked={selected === "tv"}
                onChange={handleChange}
              />
              TV Shows
            </div>
            <div className="search-flex" id="search">
              <input
                type="text"
                name="search-term"
                id="search-term"
                placeholder="Enter search term"
                className="text-black"
                onChange={(e) => searchItems(e.target.value)}
              />
              <button>
                <Link to={searchQ}>Search</Link>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Header;
