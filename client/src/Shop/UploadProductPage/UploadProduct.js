import React, { useState } from "react";
import { UploadStyle } from "./style/uploadstyle";
import { Button, Form, Input } from "antd";
import MovieFileUpload from "./Section/MovieFileUpload";
import Axios from "axios";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

const { TextArea } = Input;
const Continents = [
  { key: 1, value: "의류" },
  { key: 2, value: "신발" },
  { key: 3, value: "쥬얼리 / 시계" },
  { key: 4, value: "가방 / 잡화" },
  { key: 5, value: "생활용품" },
  { key: 6, value: "자전거 / 보드" },
  { key: 7, value: "화장품 / 향수" },
  { key: 8, value: "바디 / 헤어" },
  { key: 9, value: "중고시장" },
  { key: 10, value: "카메라" },
  { key: 11, value: "건강 / 의료용품" },
  { key: 12, value: "기타" },
];

const UploadProductPage = (props) => {
  const user = useSelector((state) => state.user);

  const [PdNameValue, setPdNameValue] = useState("");
  const [BrandValue, setBrandValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [QuantityValue, setQuantityValue] = useState(1);
  const [Images, setImages] = useState([]);
  const [VideoPath, setVideoPath] = useState([]);
  const [Duration, setDuration] = useState([]);
  const [ContinentValue, setContinentValue] = useState(1);

  const onContinentsSelectChange = (event) => {
    setContinentValue(event.currentTarget.value);
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
  };

  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !PdNameValue ||
      !BrandValue ||
      !DescriptionValue ||
      !PriceValue ||
      !QuantityValue ||
      !Images.length == 0 ||
      !Duration ||
      !VideoPath ||
      !ContinentValue
    ) {
      return alert("빈칸을 채워주세요");
    }

    const variables = {
      seller: user.userData._id,
      pdName: PdNameValue,
      brandName: BrandValue,
      description: DescriptionValue,
      price: PriceValue,
      quantity: QuantityValue,
      images: Images,
      videos: VideoPath,
      duration: Duration,
      continents: ContinentValue,
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

  return (
    <UploadStyle>
      <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}></div>
        <Form onSubmit={onSubmit}>
          {/* DropZone */}
          <MovieFileUpload refreshImgFunction={video} />
          <br />
          <br />
          <label>물품명 : </label>
          <Input onChange={onPdNameChange} value={PdNameValue} />
          <br />
          <br />
          <label>브랜드 : </label>
          <Input onChange={onBrandChange} value={BrandValue} />
          <br />
          <br />
          <label>상세정보 : </label>
          <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
          <br />
          <br />
          <label>가 격 : </label>
          <Input onChange={onPriceChange} value={PriceValue} type="number" />
          <br />
          <br />
          <label>종 류 : </label>
          <select onChange={onContinentsSelectChange} value={ContinentValue}>
            {Continents.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}{" "}
              </option>
            ))}
          </select>

          <br />
          <br />
          <Button onClick={onSubmit}>아이템 등록하기</Button>
        </Form>
      </div>
    </UploadStyle>
  );
};

export default withRouter(UploadProductPage);
