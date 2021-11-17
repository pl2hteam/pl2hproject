// import React from "react";


////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import Letter2 from '../Letter2.css'
import { withRouter } from "react-router";


const { Meta } = Card;

const Main = () => {
 

    const [Letters, setProfiles] = useState([]);
    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(2);
    const [PostSize, setPostSize] = useState(0);
  
  
    // 상품목록 불러오기
    const getProfiles = (body) => {
      

     
      Axios.post("/api/mysql/letters/read", body).then((response) => {
       
        console.log(body,2);
        if (response.data.success) {
          console.log(response.data,4);
          
          if (body.loadMore) {
            setProfiles([...Letters, ...response.data.fullLetter]);
            console.log(response.data.fullLetter,6);
          
          } else {
            setProfiles(response.data.fullLetter);
            console.log(response.data.fullLetter,5);
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


      function open_letter() {
        document.getElementsByClassName("letter-close")[0].style.display = 'none'
        document.getElementsByClassName("letter-open")[0].style.display = 'block'
    }
    
    // function go_iu() {
    //     alert('드디어 기다림의 이유를 만나러')
    //     window.location.href = 'https://www.youtube.com/c/dlwlrma/featured'
    // }


      return (
        <Col lg={3} md={4} xs={8}>
          
           <div class="letter-close"onClick={() => {
                open_letter(true)}}>
        <div class="envelope" onClick={() => {
                open_letter(true)}}></div>
        <h2 class="envelope-msg">봉투를 열어봐</h2>
        <h3 class="envelope-msg">음악이 나오니 볼륨을 조정해주세요</h3>
    </div>

    <div class="letter-open">
        <div class="IU"  ></div>
        <h1 class="letter-title">사랑해♥️</h1>

        <div class="msgbox">
        <p class="from">   <Meta description={`${fullLetter.to}`} />가</p>
       
            <Meta description={`${fullLetter.title}`} />
            <Meta description={`${fullLetter.content}`} />

            내 친구  <Meta description={`${fullLetter.ps}`} /> <br />
            <p class="from"> <Meta description={`${fullLetter.from}`} /></p>
        </div>
        <div class="music">
            <iframe src="https://www.youtube.com/embed/w14rSMl35ro?autoplay=1" allow="autoplay"></iframe>
        </div>
        <button onClick={() => {
                open_letter(false)}}>닫기</button>

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
  
        {/* 검색란 */}
  
  
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
            <h2>등록된 댓글이 없습니다</h2>
          </div>
        ) : (
   
              <Row gutter={[16, 16]}>{renderCards}</Row>
        )}
        <br />
     
  
      
      </div>
    );
  };

export default withRouter(Main);