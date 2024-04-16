import { auth, provider } from "../../firebase";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom"; // useHisotry is no more in React V6+
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  setSignOutState,
  selectUserPhoto,
  setUserLoginDetails,
} from "../../features/user/userSlice";
import { useCallback, useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const setUser = useCallback(
    (user) => {
      // Your logic for setting user details in Redux store
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    },
    [dispatch]
  ); // Dependencies for useCallback

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // history.push("/home");
        history("/home");
      }
    });
  }, [history, setUser]);

  useEffect(() => {
    // This effect runs whenever userName changes
    if (userName) {
      // Update UI based on logged-in user's name
      console.log(`Logged in user: ${userName}`); // Example update
    }
  }, [userName]); // Dependency array with userName

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <>
      <nav className="nav">
        <a className="logo">
          <img src="/images/logo.svg" alt="Disney+" />
        </a>

        {!userName ? (
          <div className="login">
            <a onClick={handleAuth}>Login</a>
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
              <img className="user-img" src={userPhoto} alt={userName} />
              <div className="drop-down">
                <span onClick={handleAuth}>Sign out</span>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
