import React, { useState } from "react";
import { Typography, Button, Form, message, Input } from "antd";
import MovieFileUpload from "./Intro/MovieFileUpload";
import Axios from "axios";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { UploadStyle } from "./style/uploadstyle";

const { Title } = Typography;
const { TextArea } = Input;

const UpdatePic = (props) => {
  const [PostTitle, setPostTitle] = useState("");
  const [PostContent, setPostContent] = useState("");
  const [PostImg, setPostImg] = useState("");

  const [VideoPath, setVideoPath] = useState([]);
  const [Duration, setDuration] = useState([]);

  const onPostTitle = (event) => {
    setPostTitle(event.currentTarget.value);
  };
  const updateImages = (newImages) => {
    setPostImg(newImages);
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
      !PostTitle
    ) {
      return alert("fill all the fields first!");
    }

    console.log(props.user.userData.id);
    const variables = {
      seller: props.user.userData.id,
      title: PostTitle,
      // content: PostContent,
      img: PostImg,
      // views: PostViews,
      videos: VideoPath,
      duration: Duration,
    };

    Axios.post("/api/mysql/album/write", variables)
      .then((response) => {
        if (response.data.success) {
          alert("사진이 더해졌습니다!");
          props.history.push("/sns/pic");
        } else {
          alert("사진이 안 올라갔어요ㅠㅠ");
        }
      });
  };

  let postvideo = {
    updateImages,
    updateVideoPath,
    updateDuration
  }

  return (
    <UploadStyle>
      <div style={{ maxWidth: "700px", margin: "0rem auto" }}>
        <h1 className="title">사진 더하기</h1>
        <Form onSubmit={onSubmit}>
          <MovieFileUpload refresh={postvideo} />
          <div className="upload-item-list">
            <div className="item">
              <label>해시태그</label>
              <Input onChange={onPostTitle} value={PostTitle} />
            </div>
            <Button onClick={onSubmit}>사진 더하기</Button>
          </div>
        </Form>
      </div>
    </UploadStyle>
  );
}

export default withRouter(UpdatePic);