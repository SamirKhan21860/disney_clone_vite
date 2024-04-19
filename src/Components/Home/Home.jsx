import { useEffect, useRef } from "react";
import Originals from "../Originals/Originals";
import ImgSlider from "../ImgSlider/ImgSlider";
import NewDisney from "../NewDisney/NewDisney";
import Recommends from "../Recommends/Recommends";
import Trending from "../Trending/Trending";
import Viewers from "../Viewers/Viewers";
import "./Home.css";
import { useDispatch } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

const Home = () => {
  const dispatch = useDispatch();
  const recommendsRef = useRef([]);
  const newDisneyRef = useRef([]);
  const originalsRef = useRef([]);
  const trendingRef = useRef([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const movieData = { id: doc.id, ...doc.data() };
        switch (movieData.type) {
          case "recommend":
            recommendsRef.current.push(movieData);
            break;
          case "new":
            newDisneyRef.current.push(movieData);
            break;
          case "original":
            originalsRef.current.push(movieData);
            break;
          case "trending":
            trendingRef.current.push(movieData);
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommendsRef.current,
          newDisney: newDisneyRef.current,
          original: originalsRef.current,
          trending: trendingRef.current,
        })
      );
    });

    // Cleanup function to unsubscribe from snapshot updates when the component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="container">
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </div>
  );
};

export default Home;

// import Originals from "../Originals/Originals";
// import ImgSlider from "../ImgSlider/ImgSlider";
// import NewDisney from "../NewDisney/NewDisney";
// import Recommends from "../Recommends/Recommends";
// import Trending from "../Trending/Trending";
// import Viewers from "../Viewers/Viewers";
// import "./Home.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUserName } from "../../features/user/userSlice";
// import { setMovies } from "../../features/movie/movieSlice";
// import db from "../../firebase";
// import { useEffect } from "react";

// const Home = () => {
//   const dispatch = useDispatch();
//   const userName = useSelector(selectUserName);
//   let recommends = [];
//   let newDisneys = [];
//   let originals = [];
//   let trending = [];

//   useEffect(() => {
//     console.log("hello");
//     db.collection("movies").onSnapshot((snapshot) => {
//       snapshot.docs.map((doc) => {
//         console.log(recommends);
//         switch (doc.data().type) {
//           case "recommend":
//             recommends = [...recommends, { id: doc.id, ...doc.data() }];
//             break;

//           case "new":
//             newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
//             break;

//           case "original":
//             originals = [...originals, { id: doc.id, ...doc.data() }];
//             break;

//           case "trending":
//             trending = [...trending, { id: doc.id, ...doc.data() }];
//             break;
//         }
//       });

//       dispatch(
//         setMovies({
//           recommend: recommends,
//           newDisney: newDisneys,
//           original: originals,
//           trending: trending,
//         })
//       );
//     });
//   }, [userName]);

//   return (
//     <>
//       <div className="container">
//         <ImgSlider />
//         <Viewers />
//         <Recommends />
//         <NewDisney />
//         <Originals />
//         <Trending />
//       </div>
//     </>
//   );
// };

// export default Home;
