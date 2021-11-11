import React from "react";
import { Carousel } from 'react-responsive-carousel';

function ImageSlider(props) {
  console.log(props);
  return (
    <div>
      <Carousel showArrows={true}>
        {props.images.images.map((image, index) => (
          <div key={index}>
            <a href={`/shop/product/${props.images._id}`}>
            <img
              style={{ width: "30vw", maxHeight: "150px" }}
              src={`http://localhost:5000/${image}`}
              alt="productImage"
            />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
