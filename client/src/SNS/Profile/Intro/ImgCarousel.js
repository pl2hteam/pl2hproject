import React, { Component } from 'react'
import SwiftSlider from 'react-swift-slider'

const ImgCarousel = (props) => {
  let imgs = props.images;
  let items =  [];
  for (let i = 0; i < imgs.length; i++) {
    let splitImg = imgs[i].split("\\");
    items.push({ 'id': `${i}`, 'src': `13.124.13.37:5000/uploads/img/${splitImg[2]}` });
  }

  return <SwiftSlider data={items} interval={5000} />
}

export default ImgCarousel;