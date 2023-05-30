import { useEffect } from "react";
import { useState } from "react";

export const MovieDetails = () => {
  const [movie, setMovies] = useState([]);
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ba443e63c90864d5dffb2a2255267b7e&language=en-US`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setMovies(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  });
  const imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <div className="container mx-auto">
        <span className="text-xl">Back to Movies</span>
      </div>
      <div className="container mx-auto columns-2 text-center">
        <img src={imgSrc} />
        <div>
          <h2 className="text-center font-bold text-3xl uppercase mb-5">
            {movie.title}
          </h2>
          <p className="text-lg mb-3 text-left">{movie.vote_average} / 10</p>
          <p className="text-lg mb-5 text-left">
            Release Date: {movie.release_date}
          </p>
          <p className="text-left mb-6">{movie.overview}</p>
          <p className="text-left my-3">Genre</p>
          <ul className="text-left">
            {/* {movie.genres.map((genre) => (
              <li>{genre.name}</li>
            ))} */}
          </ul>
          <p href={movie.homepage} className="text-left">
            Visit Homepage
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="text-2xl font-bold">MOVIE INFO</div>
      </div>
      <div className="container mx-auto px-4 text-lg">
        <div>
          <span className="text-yellow-400">Budget:</span> {movie.budget}
        </div>
        <div>
          <span className="text-yellow-400">Revenue: </span>
          {movie.revenue}
        </div>
        <div>
          <span className="text-yellow-400">Runtime:</span> {movie.runtime}
        </div>
        <div>
          <span className="text-yellow-400">Status: </span>
          {movie.status}
        </div>
        <div>Production Companies</div>
        <ul className="text-left">
          {/* {movie.production_companies.map((company) => (
              <li>{company.name}</li>
            ))} */}
        </ul>
      </div>
    </>
  );
};
