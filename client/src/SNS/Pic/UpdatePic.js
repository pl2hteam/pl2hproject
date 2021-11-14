import React, { useState } from "react";
import { Typography, Button, Form, message, Input } from "antd";
import MovieFileUpload from "../Profile/Intro/MovieFileUpload";
import Axios from "axios";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

const { Title } = Typography;
const { TextArea } = Input;

const UpdatePic = (props) => {
  const [PostTitle, setPostTitle] = useState("");
  const [PostContent, setPostContent] = useState("");
  const [PostImg, setPostImg] = useState("");
  const [PostViews, setPostViews] = useState(0);
  const [VideoPath, setVideoPath] = useState([]);
  const [Duration, setDuration] = useState([]);

  const onPostTitle = (event) => {
    setPostTitle(event.currentTarget.value);
  };
  const onPostContent = (event) => {
    setPostContent(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setPostImg(newImages);
  };

  const onPostViews = (event) => {
    setPostViews(parseInt(event.currentTarget.value));
  };

  const updateVideoPath = (newVideoPath) => {
    setVideoPath(newVideoPath);
  };

  const updateDuration = (newDuration) => {
    setDuration(newDuration);
  }

  const user = useSelector(state => state.user);
  console.log(user);
  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !PostTitle ||
      !PostContent ||
      // !PostImg ||
      !PostViews
    ) {
      return alert("fill all the fields first!");
    }

    // console.log(props.user.userData.id);
    const variables = {
      seller: props.user.userData.id,
      title: PostTitle,
      content: PostContent,
      img: PostImg,
      views: PostViews,
      videos: VideoPath,
      duration: Duration,
    };

    Axios.post("/api/mysql/posts/write", variables)
      .then((response) => {
        console.log("답답답ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ");
        console.log(response);
        console.log("답답답ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ");
        if (response.data.success) {
          alert("Product Successfully Uploaded");
          props.history.push("/sns/profile");
        } else {
          console.log(response.data)
          alert("Failed to upload Product");
        }
      });
  };

  let postvideo = {
    updateImages, 
    updateVideoPath, 
    updateDuration
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>커플 상품</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <MovieFileUpload refresh={postvideo} />

        <br />
        <br />
        <label>물품명</label>
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

export default withRouter(UpdatePic);