// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const NowPlayingCard = ({ movie }) => {
  //   const navigate = useNavigate();
  const id = movie.id;
  const imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const linkId = `../moviedetails/${movie.id}`;

  return (
    <div className="mb-4">
      <Link to={linkId}>
        <img src={imgSrc} alt={movie.title} />

        <h4 className="swiper-rating font-bold py-2 bg-black">
          <i className="fas fa-star text-secondary"></i> {movie.vote_average} /
          10
        </h4>
      </Link>
    </div>
  );
};
