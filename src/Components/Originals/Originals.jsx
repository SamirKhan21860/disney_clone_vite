import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../../features/movie/movieSlice";

const Originals = () => {
  const movies = useSelector(selectOriginal);

  return (
    <>
      <div className="cotainer">
        {movies &&
          movies.map((movie, key) => (
            <div className="wrap" key={key}>
              {movie.id}
              <Link className="link" to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Originals;
