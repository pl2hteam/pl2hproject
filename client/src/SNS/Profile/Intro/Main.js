// import React from "react";
import styled from "styled-components";

////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
// import ImageSlider from "../../../Common/components/ImageSlider"
import { withRouter } from "react-router";

////////////////////////////////////////

const Wrapper = styled.div`
  padding: 10px 0;
  font-family: serif;
  font-weight: bold;
  img {
    width: 100%;
    margin: 5px 0;
  }
  h2 {
    color: #a7a7a7;
    font-size: 1.2rem;
  }
  .at {
    color: #cec6a0;
    font-size: 0.9rem;
  }
  .warn {
    text-align: right;
    color: #d9d9d9;
    text-decoration: line-through;
    font-weight: bold;
    font-size: 0.85rem;
    font-style: italic;
  }
`;

const TxtWrapper = styled.div`
  padding: 40px;
  text-align: center;
  .txt {
    margin-bottom: 20px;
    color: #333;
    font-weight: normal;
  }
`;

const { Meta } = Card;

const Main = () => {
  const [Posts, setPosts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(2);
  const [PostSize, setPostSize] = useState(0);


  // 상품목록 불러오기
  const getPosts = (body) => {
    Axios.post("/api/mysql/posts/read", body).then((response) => {
    
      console.log(response.data);
      if (response.data.success) {
        
        if (body.loadMore) {
          setPosts([...Posts, ...response.data.fullPost]);
         
        } else {
          setPosts(response.data.fullPost);
        }
        setPostSize(response.data.postSize);
        setPosts([...Posts, ...response.data.fullPost]);
      } else {
        console.log(1);
        alert("Failed to fectch post datas");
      }
    });
  };

  // 더보기 버튼
  const loadMoreHandler = () => {
    let skip = Skip + Limit;

    let variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      
    };

    getPosts(variables);
    setSkip(skip);
  };

  const renderCards = Posts.map((fullPost, index) => {
    return (
      <Col lg={3} md={4} xs={8}>
        <Meta title={fullPost.title} description={`$${fullPost.content}`} />
      </Col>
    );
  });

  // category 는 체크박스랑 라디오 박스를 나누기 위한 것

  // 텍스트 검색


  // default
  useEffect(() => {
    let variables = {
      skip: Skip,
      limit: Limit,
    };

    getPosts(variables);
  }, []);

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>상품 메인 화면</h2>
      </div>

      {/* 상품, 가격 필터 */}
      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}></Col>
        <Col lg={12} xs={24}></Col>
      </Row>

      {/* 검색란 */}


      {/* 등록된 상품이 0개면 "상품없다고 출력  */}
      {Posts.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>등록된 상품이 없읍니다</h2>
        </div>
      ) : (
        // 상품 있으면 목록 출력
        <Row gutter={[16, 16]}>{renderCards}</Row>
      )}
      <br />

      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>더보기</button>
        </div>
      )}
    </div>
  );
};

export default withRouter(Main);