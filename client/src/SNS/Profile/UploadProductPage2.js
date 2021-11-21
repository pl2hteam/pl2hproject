import React, { useState } from "react";
import { Typography, Button, Form, message, Input } from "antd";
import MovieFileUpload from "./Intro/MovieFileUpload";
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
  };

  const user = useSelector((state) => state.user);
  console.log(user);
  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용
    if (!PostTitle && !PostContent && !PostImg) {
      return alert("아무것도 안썼잖아 이자식아");
    } else if (!PostTitle) {
      return alert("제목을 입력해라 이자식아");
    } else if (!PostContent) {
      return alert("내용을 입력해라 이자식아");
    } else if (!PostImg) {
      return alert("사진을 첨부해라 이자식아");
    }

    console.log(props.user.userData.id);
    const variables = {
      seller: props.user.userData.id,
      title: PostTitle,
      content: PostContent,
      img: PostImg,
      views: PostViews,
      videos: VideoPath,
      duration: Duration,
    };

    Axios.post("/api/mysql/posts/write", variables).then((response) => {
      console.log("답답답ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ");
      console.log(response);
      console.log("답답답ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ");
      if (response.data.success) {
        alert("업로드 하였읍니다");
        props.history.push("/sns/profile");
      } else {
        console.log(response.data);
        alert("업로드에 실패하였읍니다");
      }
    });
  };

  let postvideo = {
    updateImages,
    updateVideoPath,
    updateDuration,
  };

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
        <label>제목</label>
        <Input onChange={onPostTitle} value={PostTitle} />
        <br />
        <br />
        <label>내용</label>
        <Input onChange={onPostContent} value={PostContent} />
        <br />
        <br />

        {/* <Input onChange={onPostViews} value={PostViews} type="number" /> */}

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default withRouter(UploadProductPage2);
