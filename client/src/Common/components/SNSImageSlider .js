import React from "react";
import { Carousel } from 'react-responsive-carousel';

function ImageSlider(props) {
  return (
    <div>
      <div showArrows={true}>
        {props.images.images.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", maxHeight: "500px" }}
              src={`13.124.13.37:5000/${image}`}
              alt="productImage"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;