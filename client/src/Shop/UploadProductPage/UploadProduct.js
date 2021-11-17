import React, { useState } from "react";
import { UploadStyle } from "./style/uploadstyle";
import { Button, Form, Input } from "antd";
import MovieFileUpload from "./Section/MovieFileUpload";
import Axios from "axios";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Subject } from "./Section/data";

const { TextArea } = Input;

const UploadProductPage = (props) => {
  const user = useSelector((state) => state.user);

  const [PdNameValue, setPdNameValue] = useState("");
  const [BrandValue, setBrandValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [Images, setImages] = useState([]);
  const [VideoPath, setVideoPath] = useState([]);
  const [Duration, setDuration] = useState([]);
  const [ItemNumber, setItemNumber] = useState(1);

  const onItemNumberSelectChange = (event) => {
    setItemNumber(event.currentTarget.value);
  };

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

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const updateVideoPath = (newVideoPath) => {
    setVideoPath(newVideoPath);
  };

  const updateDuration = (newDuration) => {
    setDuration(newDuration);
  };

  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !PdNameValue ||
      !BrandValue ||
      !DescriptionValue ||
      !PriceValue ||
      Images.length == 0
    ) {
      return alert("빈칸을 채워주세요");
    }

    const variables = {
      seller: user.userData._id,
      pdName: PdNameValue,
      brandName: BrandValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      videos: VideoPath,
      duration: Duration,
      itemNumber: ItemNumber,
    };

    Axios.post("/api/mongo/product/uploadProduct", variables).then(
      (response) => {
        // console.log("답신은 : ", response);
        if (response.data.success) {
          alert("아이템이 거래소에 등록되었습니다.");
          props.history.push("/shop/main");
        } else {
          alert("아이템 등록이 실패하였습니다");
        }
      }
    );
  };

  let video = {
    updateImages,
    updateVideoPath,
    updateDuration,
  };
  console.log(ItemNumber);
  return (
    <UploadStyle>
      <div style={{ maxWidth: "700px", margin: "0rem auto" }}>
        <Form onSubmit={onSubmit}>
          <MovieFileUpload refreshImgFunction={video} />
          <div className="item">
            <label>물품명 : </label>
            <Input onChange={onPdNameChange} value={PdNameValue} />
          </div>
          <div className="item">
            <label>브랜드 : </label>
            <Input onChange={onBrandChange} value={BrandValue} />
          </div>
          <div className="item">
            <label>상세정보 : </label>
            <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
          </div>
          <div className="item">
            <label>가 격 : </label>
            <Input onChange={onPriceChange} value={PriceValue} type="number" />
          </div>
          <div className="item">
            <label>종 류 : </label>
            <select onChange={onItemNumberSelectChange} value={ItemNumber}>
              {Subject.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>

          <Button onClick={onSubmit}>아이템 등록하기</Button>
        </Form>
      </div>
    </UploadStyle>
  );
};

export default withRouter(UploadProductPage);
