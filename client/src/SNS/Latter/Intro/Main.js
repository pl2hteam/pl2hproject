import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import { withRouter } from "react-router";
import '../Letter2.css';

const { Meta } = Card;

const Main = () => {
  const [Letters, setProfiles] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(2);
  const [PostSize, setPostSize] = useState(0);

  // 상품목록 불러오기
  const getProfiles = (body) => {
    Axios.post("/api/mysql/letters/read", body).then((response) => {
      if (response.data.success) {
        if (body.loadMore) {
          setProfiles([...Letters, ...response.data.fullLetter]);
          console.log(response.data.fullLetter, 6);
        } else {
          setProfiles(response.data.fullLetter);
          console.log(response.data.fullLetter, 5);
        }
        setPostSize(response.data.postSize);
        setProfiles([...Letters, ...response.data.fullLetter]);
      } else {
        console.log(1);
        alert("Failed to fectch post datas");
      }
    });
  };

  const renderCards = Letters.map((fullLetter, index) => {
    function open_letter(data) {
      if (data) {
        document.getElementsByClassName("letter-close")[index].style.display = 'none'
        document.getElementsByClassName("letter-open")[index].style.display = 'block'
      } else {
        document.getElementsByClassName("letter-close")[index].style.display = 'block'
        document.getElementsByClassName("letter-open")[index].style.display = 'none'
      }
    }
    return (
      <Col lg={3} md={4} xs={8}>
        <div class="letter-close" onClick={() => {
          open_letter(true)
        }}>
          <div class="envelope" onClick={() => {
            open_letter(true)
          }}></div>
          <h2 class="envelope-msg">봉투를 열어봐</h2>
          <h3 class="envelope-msg">음악이 나오니 볼륨을 조정해주세요</h3>
        </div>

        <div class="letter-open" >
          <div class="IU"  ></div>
          <h1 class="letter-title">사랑해♥️</h1>
          <div class="msgbox">
            <p class="from">   <Meta description={`${fullLetter.to}`} /></p>
            <Meta description={`${fullLetter.title}`} />
            <Meta description={`${fullLetter.content}`} />
            <Meta description={`${fullLetter.ps}`} /> <br />
            <p class="from"> <Meta description={`${fullLetter.from}`} /></p>
          </div>
          <button onClick={() => {
            open_letter(false)
          }}>닫기</button>
        </div>
      </Col>
    );
  });

  // default
  useEffect(() => {
    let variables = {
      skip: Skip,
      limit: Limit,
    };

    getProfiles(variables);
  }, []);

  return (
    <div >
      <div style={{ textAlign: "center" }}>
      </div>

      {/* 상품, 가격 필터 */}
      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}></Col>
        <Col lg={12} xs={24}></Col>
      </Row>

      {/* 등록된 상품이 0개면 "상품없다고 출력  */}
      {Letters.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>우체통이 비어 있습니다.</h2>
        </div>
      ) : (
        <Row gutter={[16, 16]}>{renderCards}</Row>
      )}
      <br />
    </div>
  );
};

export default withRouter(Main);