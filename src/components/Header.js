import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  // const navigate = NavLink;
  return (
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
  );
}

export default Header;
