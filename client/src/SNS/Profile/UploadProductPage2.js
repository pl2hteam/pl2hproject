import React, { useState } from "react";
import { Typography, Button, Form, message, Input } from "antd";
// import FileUpload from "../../Common/components/FileUpload";
import Axios from "axios";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

const { Title } = Typography;
const { TextArea } = Input;

const UploadProductPage2 = (props) => {
  const [PostTitle, setPostTitle] = useState("");
  const [PostContent, setPostContent] = useState("");
  const [PostImg, setPostImg] = useState("");
  const [PostViews, setPostViews] = useState(0);

  const onPostTitle = (event) => {
    setPostTitle(event.currentTarget.value);
  };
  const onPostContent = (event) => {
    setPostContent(event.currentTarget.value);
  };

  const onPostImg = (event) => {
    setPostImg(event.currentTarget.value);
  };

  const onPostViews = (event) => {
    setPostViews(parseInt(event.currentTarget.value));
  };

  const user = useSelector(state => state.user);
  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !PostTitle ||
      !PostContent ||
      !PostImg ||
      !PostViews
    ) {
      return alert("fill all the fields first!");
    }

    // console.log('props id 는 : ', props.user.userData._id);
    const variables = {
      //seller: user.userData._id,
      title: PostTitle,
      content: PostContent,
      img: PostImg,
      views: PostViews,

    };

    Axios.post("/api/mysql/posts/write", variables)
      .then((response) => {
        console.log('props.user 는 : ', response);
        if (response.data.success) {
   
          alert("Product Successfully Uploaded");
          props.history.push("/sns/profile");
        } else {
          console.log(response.data)
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
        {/* <FileUpload refreshFunction={PostImg} /> */}

        <br />
        <br />
        <label>물품명</label>1
        <Input onChange={onPostTitle} value={PostTitle} />
        <br />
        <br />
        <label>브랜드</label>
        <Input onChange={onPostContent} value={PostContent} />
        <br />
        <br />
        {/* <label>상세정보</label>
        <TextArea onChange={onPostImg} value={PostImg} />
        <br />
        <br /> */}
        <label>가격</label>
        <Input onChange={onPostViews} value={PostViews} type="number" />
        <br />
        <br />
        <label>수량</label>
       
        <br />
        <br />

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default withRouter(UploadProductPage2);