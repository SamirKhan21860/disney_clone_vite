import Originals from "../Originals/Originals"
import ImgSlider from "../ImgSlider/ImgSlider";
import NewDisney from "../NewDisney/NewDisney";
import Recommends from "../Recommends/Recommends";
import Trending from "../Trending/Trending";
import Viewers from "../Viewers/Viewers";

// import React from 'react'
const Home = () => {
  return (
    // <>
    <div className="container">
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </div>
    // </>
  );
};

export default Home;
