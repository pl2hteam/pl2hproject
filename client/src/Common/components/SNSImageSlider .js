import React, { useState } from "react";
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-material-ui-carousel'
import { Carousel } from "react-carousel-minimal";
// import Slider from 'react-slick'

const ImageSlider = (props) => {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    // 좌측 상단 숫자 스타일
    display: "none",
  };

  let data = [];
  {
    props.images.images.map((image, index) =>
      data.push({
        image: `http://localhost:5000/${image}`,
      })
    );
  }

  return (
    <div>
      <Carousel
        data={data}
        time={2000}
        width="100%"
        // height="100%"
        captionStyle={captionStyle}
        radius="0px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={false}
        dots={false}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="contain"
        thumbnails={false}
        thumbnailWidth="0px"
        showNavBtn={false}
      />
    </div>
  );
};

export default ImageSlider;
