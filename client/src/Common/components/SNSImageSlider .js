import React from "react";
import { Carousel } from 'react-responsive-carousel';

function ImageSlider(props) {
  console.log(props);
  return (
    
      <Carousel showArrows={true}>
        {props.images.images.map((image, index) => (
         <div>
            <div key={index}>
            <img
              style={{ width: "100%", maxHeight: "300px" }}
              src={`http://localhost:5000/${image}`}
              alt="productImage"
            />
          </div>
        //  </div>
        ))}
      </Carousel>
   
  );
}

export default ImageSlider;

