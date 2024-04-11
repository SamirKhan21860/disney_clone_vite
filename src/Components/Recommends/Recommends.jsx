// import React from 'react'

const Recommends = () => {
  const movies = null;
  return (
    <>
      <div className="container">
        <h4>New to Disney+</h4>
        <div className="content">
          {movies &&
            movies.map((movie, key) => (
              <div className="wrap" key={key}>
                {movie.id}
                <link to={`/detail/` + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Recommends;
