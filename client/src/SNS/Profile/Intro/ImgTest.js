import React, { Component } from 'react'
import SwiftSlider from 'react-swift-slider'


const ImgTest = (props) => {
  console.log(props);
  let imgs = props.images;
  console.log(imgs);
  let items =  [];
  for (let i = 0; i < imgs.length; i++) {
    console.log(imgs[i]);
    let splitImg = imgs[i].split("\\");
    console.log(splitImg);
    items.push({ 'id': `${i}`, 'src': `http://localhost:5000/uploads/img/${splitImg[2]}` });
  }
  console.log(items);

  return <SwiftSlider data={items} showDots={false} />
}

export default ImgTest;