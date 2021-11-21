import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import './style/ProductImage.css'

const ProductImage = (props) => {
  const [Video, setVideo] = useState([]);

  useEffect(() => {
    let videos = [];
    if (props.detail.videos && props.detail.videos.length > 0) {
      props.detail.videos &&
        props.detail.videos.map((item) => {
          videos.push(item);
        });
    }
    setVideo(videos);
  }, [props.detail]);

  return (
    <div className="postPage-content-image_slider">
      {Video.length === 0 ? (
        <div>
          <ImageSlider detail={props.detail} />
        </div>
      ) : (
        <div>
          <ImageSlider detail={props.detail} />
          <video
            className="videobox"
            src={`http://localhost:5000/${Video} `}
            controls
            auto
            loop
            muted
          />
        </div>
      )}
    </div>
  );
};

export default ProductImage;
