import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import MovieFileUpload from "./Intro/MovieFileUpload";
import Axios from "axios";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

const { Title } = Typography;

const UpdatePic = (props) => {
  const [PostTitle, setPostTitle] = useState("");
  const [PostMood, setPostMood] = useState("");
  const [PostImg, setPostImg] = useState("");
  const [VideoPath, setVideoPath] = useState([]);
  const [Duration, setDuration] = useState([]);

  const onPostTitle = (event) => {
    setPostTitle(event.currentTarget.value);
  };
  const onPostMood = (event) => {
    setPostMood(event.currentTarget.value);
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
      mood: PostMood,
      // content: PostContent,
      img: PostImg,
      // views: PostViews,
      videos: VideoPath,
      duration: Duration,
    };

    Axios.post("/api/mysql/jams/write", variables)
      .then((response) => {
        console.log("답답답ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ");
        console.log(response);
        console.log("답답답ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ");
        if (response.data.success) {
          alert("Product Successfully Uploaded");
          props.history.push("/sns/jam");
        } else {
          console.log(response.data, 314141)
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
        <label>타이틀</label>
        <Input onChange={onPostTitle} value={PostTitle} />
        <label>무드</label>
        <Input onChange={onPostMood} value={PostMood} />
        <br />
        {/* <Atmosphere /> */}
        <br />
        <br />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default withRouter(UpdatePic);