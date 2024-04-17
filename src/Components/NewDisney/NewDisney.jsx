// import React from 'react'

import { useSelector } from "react-redux";
import { selectNewDisney } from "../../features/movie/movieSlice";
import { Link } from 'react-router-dom';


const NewDisney = () => {
  const movies = useSelector(selectNewDisney);
  return (
    <>
      <div className="container">
        <h4>New to Disney+</h4>
        <div className="content">
          {movies &&
            movies.map((movie, key) => (
              <div className="wrap" key={key}>
                {movie.id}
                <Link to={`/detail/` + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default NewDisney;
