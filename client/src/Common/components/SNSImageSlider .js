import React from "react";
import { Carousel } from 'react-responsive-carousel';

function ImageSlider(props) {
  console.log(props);
  return (
    <div>
      <div showArrows={true}>
        {props.images.images.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", maxHeight: "500px" }}
              src={`http://localhost:5000/${image}`}
              alt="productImage"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
