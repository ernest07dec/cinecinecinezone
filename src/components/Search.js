import { useEffect } from "react";
import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { TVCard } from "./TVCard";

export const Search = () => {
  const [movies, setMovies] = useState([]);
  const term = window.location.search.split("=")[1].split("&")[0];
  const type = window.location.search.split("=")[2];
  const url = `https://api.themoviedb.org/3/search/${type}?query=${term}&api_key=ba443e63c90864d5dffb2a2255267b7e&language=en-US`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  });
  if (type === "movie") {
    return (
      <>
        <h2 className="text-center font-bold text-4xl">
          Movie Results for {term}
        </h2>
        <div className="container mx-auto columns-4 text-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-center font-bold text-4xl">
          TV Show Results for {term}
        </h2>
        <div className="container mx-auto columns-4 text-center">
          {movies.map((movie) => (
            <TVCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  }
};
