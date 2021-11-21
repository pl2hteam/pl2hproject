import React from "react";
import { Carousel } from 'react-carousel-minimal';

const ImageSlider = (props) => {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  
  const slideNumberStyle = {  // 좌측 상단 숫자 스타일
    display: 'none',
  }

  let data = [];
  {props.images.images.map((image, index) => (
    data.push({
      image: `13.124.13.37:5000/${image}`
    })
  ))}
  
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "0 20px"
        }}>
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
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
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
}

export default ImageSlider;
