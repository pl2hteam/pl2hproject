import React, { useState } from "react";
import { Typography, Button, Form, message, Input } from "antd";
import Icon from '@ant-design/icons';
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
  { key: 1, value: "S" },
  { key: 2, value: "M" },
  { key: 3, value: "L" },
  { key: 4, value: "XL" },
  { key: 5, value: "2XL" },
];

function UploadProductPage(props) {
  const [PdNameValue, setPdNameValue] = useState("");
  const [BrandValue, setBrandValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [QuantityValue, setQuantityValue] = useState(1);
  const [ContinentsValue, setContinentsValue] = useState(1);
  const [Images, setImages] = useState([]);

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
    setPriceValue(event.currentTarget.value);
  };

  const onQuantityChange = (event) => {
    setQuantityValue(event.currentTarget.value);
  };

  const onContinentsSelectChange = (event) => {
    setContinentsValue(event.currentTarget.value);
  }

  const updateImages = (newImages) => {
    setImages(newImages);
  };


  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !PdNameValue ||
      !BrandValue ||
      !DescriptionValue ||
      !PriceValue ||
      !QuantityValue ||
      !ContinentsValue ||
      !Images
    ) {
      return alert("fill all the fields first!");
    }
    console.log('props 는 : ', props);
    const variables = {
      // seller: props.user.userData._id,
      pdName: PdNameValue,
      brandName: BrandValue,
      description: DescriptionValue,
      price: PriceValue,
      quantity: QuantityValue,
      select: ContinentsValue,
      images: Images,
    };

    Axios.post("/api/mongo/product/uploadProduct", variables)
      .then((response) => {
        console.log('props.user 는 : ', response);
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>커플 상품</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />

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

        <select onChange={onContinentsSelectChange}>
          {Continents.map((item) => (
            <option key={item.key}  value={ContinentsValue}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;