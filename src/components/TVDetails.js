import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TVDetails = () => {
  const [movie, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [LastEpisodeToAir, setLastEpisodeToAir] = useState([]);
  const id = window.location.pathname.split("/")[2];
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=ba443e63c90864d5dffb2a2255267b7e&language=en-US`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
        setGenre(data.genres);
        setCompanies(data.production_companies);
        setLastEpisodeToAir(data.last_episode_to_air);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [url]);
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
            {movie.name}
          </h2>
          <p className="text-lg mb-3 text-left">
            Rating: {movie.vote_average} / 10
          </p>
          <p className="text-lg mb-5 text-left">
            Last Air Date: {movie.last_air_date}
          </p>
          <p className="text-left mb-6">{movie.overview}</p>
          <p className="text-left mt-5 text-yellow-400 text-lg">Genres</p>
          <ul className="text-left mb-5">
            {genre.map((g) => (
              <li key={Math.floor(Math.random() * 1000000)}>{g.name}</li>
            ))}
          </ul>
          <Link to={movie.homepage} className="text-left">
            Visit Show Homepage
          </Link>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="text-2xl font-bold">MOVIE INFO</div>
      </div>
      <div className="container mx-auto px-4 text-lg">
        <div>
          <span className="text-yellow-400">Number of Episodes:</span>{" "}
          {movie.number_of_episodes}
        </div>
        <div>
          <span className="text-yellow-400">Last Episode to Air: </span>
          {LastEpisodeToAir.name}
        </div>
        <div>
          <span className="text-yellow-400">Status: </span>
          {movie.status}
        </div>
        <div className="text-left mt-4">Production Companies</div>
        <p className="text-left">
          {companies.map((company) => (
            <span key={Math.floor(Math.random() * 1000000)}>
              {company.name},
            </span>
          ))}
        </p>
      </div>
    </>
  );
};
export default TVDetails;
