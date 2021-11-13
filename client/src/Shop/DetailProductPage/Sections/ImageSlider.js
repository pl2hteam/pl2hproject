import React from "react";
import { Carousel } from 'react-carousel-minimal';

const ImageSlider = (props) => {
  const { images, brandName, description, pdName, seller, price } = props.detail;
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  console.log(props);
  const slideNumberStyle = {  // 좌측 상단 숫자 스타일
    display: 'none',
  }

  let data = [];
  {images.map((image, index) => (
    data.push({
      image: `http://localhost:5000/${image}`
    })
  ))}
  console.log(data);
  
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{brandName}</h1>
        <p>{description}</p>
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
