import React, { useState } from "react";
import './style/upload.css';
import { Typography, Button, Form, message, Input } from "antd";
import MovieFileUpload from "./Section/MovieFileUpload";
import Axios from "axios";
import MainForm from "../MainForm/MainForm";

const { Title } = Typography;
const { TextArea } = Input;

const UploadProductPage = (props) => {
  const [PdNameValue, setPdNameValue] = useState("");
  const [BrandValue, setBrandValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [QuantityValue, setQuantityValue] = useState(1);
  const [Images, setImages] = useState([]);
  const [VideoPath, setVideoPath] = useState([]);
  const [Duration, setDuration] = useState([]);

  const onPdNameChange = (event) => {
    setPdNameValue(event.currentTarget.value);
  };
  const onBrandChange = (event) => {
    setBrandValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(parseInt(event.currentTarget.value));
  };

  const onQuantityChange = (event) => {
    setQuantityValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const updateVideoPath = (newVideoPath) => {
    setVideoPath(newVideoPath);
  };

  const updateDuration = (newDuration) => {
    setDuration(newDuration);
  }

  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !PdNameValue ||
      !BrandValue ||
      !DescriptionValue ||
      !PriceValue ||
      !QuantityValue ||
      !Images ||
      !Duration ||
      !VideoPath
    ) {
      return alert("fill all the fields first!");
    }
    console.log('props id 는 : ', props.user.userData._id);
    const variables = {
      seller: props.user.userData._id,
      pdName: PdNameValue,
      brandName: BrandValue,
      description: DescriptionValue,
      price: PriceValue,
      quantity: QuantityValue,
      images: Images,
      videos: VideoPath,
      duration: Duration,
    };

    Axios.post("/api/mongo/product/uploadProduct", variables)
      .then((response) => {
        console.log('답신은 : ', response);
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/shop");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  let video = {
    updateImages, 
    updateVideoPath, 
    updateDuration
  }

  return (
    <MainForm>
      <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        </div>
          <Form onSubmit={onSubmit}>
            {/* DropZone */}
            <MovieFileUpload 
              refreshImgFunction={video}
            />
            <br />
            <br />
            <label>물품명</label>
            <Input onChange={onPdNameChange} value={PdNameValue} />
            <br />
            <br />
            <label>브랜드</label>
            <Input onChange={onBrandChange} value={BrandValue} />
            <br />
            <br />
            <label>상세정보</label>
            <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
            <br />
            <br />
            <label>가격</label>
            <Input onChange={onPriceChange} value={PriceValue} type="number" />
            <br />
            <br />
            <label>수량</label>
            <Input
              onChange={onQuantityChange}
              value={QuantityValue}
              type="number"
            />
            <br />
            <br />
            <Button onClick={onSubmit}>Submit</Button>
          </Form>
      </div>
    </MainForm>
  );
}

export default UploadProductPage;