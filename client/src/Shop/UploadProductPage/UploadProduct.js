import React, { useEffect, useState } from "react";
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
  const [Writer, setWriter] = useState("");

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
  
  useEffect(() => {
    const userData = { userInfo : user.userData };
    if (user.userData) {
      if (user.userData.gender) {
        Axios.get('/api/mongo/users/sns/getMongo', userData)
          .then(response => {
            if (response.data.success) {
              setWriter(response.data.user[0]._id);
            } else {
              alert('Failed')
            }
        })
      } else {
        setWriter(user.userData._id);
      }
    }
  }, [user.userData])

  const onSubmit = (event) => {
    // event.preventDefault();  // antd ?????? ??????

    if (
      !PdNameValue ||
      !BrandValue ||
      !DescriptionValue ||
      !PriceValue ||
      Images.length == 0
    ) {
      return alert("????????? ???????????????");
    }

    const variables = {
      seller: Writer,
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
        if (response.data.success) {
          alert("???????????? ???????????? ?????????????????????.");
          props.history.push("/shop/main");
        } else {
          alert("????????? ????????? ?????????????????????");
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
      <div style={{ maxWidth: "700px", margin: "0rem auto" }}>
        <h1 className="title">????????? ??????</h1>
        <Form onSubmit={onSubmit}>
          <MovieFileUpload refreshImgFunction={video} />
          <div className="upload-item-list">
            <div className="item">
              <label>????????????</label>
              <Input onChange={onPdNameChange} value={PdNameValue} />
            </div>
            <div className="item">
              <label>?????????</label>
              <Input onChange={onBrandChange} value={BrandValue} />
            </div>
            <div className="item">
              <label>????????????</label>
              <TextArea
                onChange={onDescriptionChange}
                value={DescriptionValue}
              />
            </div>
            <div className="item">
              <label>??? ???</label>
              <Input
                onChange={onPriceChange}
                value={PriceValue}
                type="number"
              />
            </div>
            <div className="item">
              <label>??? ??? </label>
              <select onChange={onItemNumberSelectChange} value={ItemNumber}>
                {Subject.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
            <Button onClick={onSubmit}>????????? ????????????</Button>
          </div>
        </Form>
      </div>
    </UploadStyle>
  );
};

export default withRouter(UploadProductPage);
