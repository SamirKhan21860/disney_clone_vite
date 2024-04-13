import { auth, provider } from "../../firebase";
import "./Header.css";

const Header = (props) => {
  console.log(props);
  const username = true;
  // const username = false;
  const handleAuth = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
    });
  };

  return (
    <>
      <nav className="nav">
        <a className="logo">
          <img src="/images/logo.svg" alt="Disney+" />
        </a>

        {!username ? (
          <div className="login">
            <a href="/login" onClick={handleAuth}>Login</a>
          </div>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
