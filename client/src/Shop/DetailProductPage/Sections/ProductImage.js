import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function ProductImage(props) {
  const [Images, setImages] = useState([]);
  const [Video, setVideo] = useState([]);

  useEffect(() => {
    let images = [];
    let videos = [];
    if (props.detail.images && props.detail.images.length > 0) {
      props.detail.images &&
        props.detail.images.map((item) => {
          let selectImg = item.split("\\", 2);

          if (selectImg[1] === "img") {
            images.push({
              original: `http://localhost:5000/${item}`,
              thumbnail: `http://localhost:5000/${item}`,
            });
          } else {
            if (props.detail.videos && props.detail.videos.length > 0) {
              props.detail.videos &&
                props.detail.videos.map((item) => {
                  videos.push(item);
                });
            }
          }
        });
      setImages(images);
      setVideo(videos);
    }
  }, [props.detail]);

  return (
    <div>
      {Video.length === 0 ? (
        <div>
          <ImageGallery items={Images} />
        </div>
      ) : (
        <div>
          <ImageGallery items={Images} />
          <video
            style={{ width: "100%" }}
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
}

export default ProductImage;
