import "./Detail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";

const Detail = () => {
  const {id} = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies").doc(id).get().then((doc) => {
      if (doc.exists) {
        setDetailData(doc.data());
      } else {
        console.log("No such document in firebase 🔥");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="background">
          <img src={detailData.title} alt={detailData.backgroundImg} />
        </div>
        <div className="image-title">
          <img src={detailData.title} alt={detailData.titleImg} />
        </div>
        <div className="content-meta">
          <div className="controls">
            <button className="player">
              <img src="/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </button>
            <div className="trailer">
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </div>
            <div className="add-list">
              <span></span>
              <span></span>
            </div>
            <div className="group-watch">
              <div>
                <img src="/images/group-icon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="sub-title">{detailData.subTitle}</div>
          <div className="description">{detailData.description}</div>
        </div>
      </div>
    </>
  );
};

export default Detail;
