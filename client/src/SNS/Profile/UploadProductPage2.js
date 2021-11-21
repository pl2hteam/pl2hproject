import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import MovieFileUpload from "./Intro/MovieFileUpload";
import Axios from "axios";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import "./UploadProductPage2.css";

const { Title } = Typography;

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
    <div style={{ width: "100%", margin: "0" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title className="sns-upload-title" level={2}>
          게시물 작성
        </Title>
      </div>

      <Form className="sns-uplaod_form" onSubmit={onSubmit}>
        {/* DropZone */}
        <MovieFileUpload refresh={postvideo} />

        <div className="sns-upload-content_box">
          <div className="sns-upload-content_box-title_box">
            <label>제목</label>
            <Input onChange={onPostTitle} value={PostTitle} />
          </div>

          <div className="sns-upload-content_box-content_box">
            <label>내용</label>
            <Input
              style={{ width: "100%", height: "100%" }}
              onChange={onPostContent}
              value={PostContent}
            />
          </div>
          <Button className="sns-upload-upload_btn" onClick={onSubmit}>
            등록
          </Button>
        </div>

        {/* <Input onChange={onPostViews} value={PostViews} type="number" /> */}
      </Form>
    </div>
  );
};

export default withRouter(UploadProductPage2);
