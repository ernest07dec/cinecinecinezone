import { useEffect } from "react";
import { useState } from "react";
import { MovieCard } from "./MovieCard";
const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=ba443e63c90864d5dffb2a2255267b7e&language=en-US";
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
  }, [url]);
  return (
    <>
      <h2 className="text-center font-bold text-4xl">POPULAR MOVIES</h2>
      <div className="container mx-auto columns-4 text-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default NowPlaying;
