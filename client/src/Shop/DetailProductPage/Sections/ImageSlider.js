import React from "react";
import { Carousel } from "react-carousel-minimal";

const ImageSlider = (props) => {
  const { images, brandName, description } = props.detail;
  
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    display: "none",
  };

  let data = [];
  {
    images.map((image, index) =>
      data.push({
        image: `http://13.124.13.37:5000/${image}`,
      })
    );
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{brandName}</h1>
        <p>{description}</p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="inherit"
            thumbnails={true}
            thumbnailWidth="50px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
