// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NoImage from "../assets/no-image.jpg";
export const MovieCard = ({ movie }) => {
  //   const navigate = useNavigate();
  const title = movie.title;
  const imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const linkId = `../moviedetails/${movie.id}`;

  return (
    <div className="mb-4">
      <Link to={linkId}>
        <img src={movie.poster_path !== null ? imgSrc : NoImage} alt={title} />

        <div className="swiper-rating overflow-hidden text-left bg-black py-3 px-2">
          <h4 className="overflow-hidden font-bold">{title}</h4>
          <h4>Release Date: {movie.release_date}</h4>
        </div>
      </Link>
    </div>
  );
};
export default MovieCard;
