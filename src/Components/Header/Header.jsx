import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="nav">
        <a className="logo">
          <img src="/images/logo.svg" alt="Disney+" />
        </a>
        <div className="nav-menu">
          <a href="/home">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg" alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
        </div>
        <div className="login">
          <a href="/login">Login</a>
        </div>
        <div className="sign-out">
          <img
            className="user-img"
            src="public\images\beauty-7246665.jpg"
            alt="Beauty image"
          />
          <div className="drop-down">
            <span>Sign out</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
