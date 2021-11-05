import React, { useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Card, Col, Row, Button } from "antd";
import AxiosMockAdapter from "axios-mock-adapter";
import faker from "faker";

let mock = new AxiosMockAdapter(axios);

let posts = [...Array(23)].map((_, index) => {
  const setIndex = index + 1;
  return {
    id: `postId-${setIndex}`,
    title: faker.lorem.words(),
    content: faker.lorem.lines(2),
    image: `${faker.image.animals()}?random=${Math.round(Math.random() * 1000)}`
  };
});

mock.onGet("/posts").reply(() => {
  try {
    const results = posts;
    return [200, results];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

function Main() {
  const [posts, setPosts] = useState([]);
  //console.log(posts);

  const onClick = async (e) => {
    e.preventDefault();
    const mockData = await axios.get("/posts");
    setPosts(mockData.data);
  };
  return (
    <>
      <Button onClick={onClick} style={{ margin: "2rem" }}>
        버튼
      </Button>
      <Row>
        {posts?.map((post) => (
          <Col key={post.id}>
            <Card
              title={post.title}
              style={{
                margin: "2rem",
                width: "20rem"
              }}
            >
              <p>{post.content}</p>
              <img src={post.image} alt="a" style={{ width: "100%" }} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Main;