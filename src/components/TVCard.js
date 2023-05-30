// import { useNavigate } from "react-router-dom";
export const TVCard = ({ movie }) => {
  //   const navigate = useNavigate();
  const id = movie.id;
  const title = movie.name;
  const imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const rating = movie.vote_average;

  return (
    <div className="mb-4">
      <a>
        <img src={imgSrc} alt={title} />
      </a>
      <div className="swiper-rating overflow-hidden text-left bg-black py-3 px-2">
        <h4 className="overflow-hidden font-bold">{title}</h4>
        <h4>First Air Date: {movie.first_air_date}</h4>
      </div>
    </div>
  );
};
