// import React from "react";


////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";

import { withRouter } from "react-router";


const { Meta } = Card;

const Main = () => {

    const [Profiles, setProfiles] = useState([]);
    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(2);
    const [PostSize, setPostSize] = useState(0);
  
  
    // 상품목록 불러오기
    const getProfiles = (body) => {
      
     
      Axios.post("/api/mysql/profiles/read", body).then((response) => {
       
        console.log(body,2);
        if (response.data.success) {
          console.log(response.data,4);
          
          if (body.loadMore) {
            setProfiles([...Profiles, ...response.data.fullProfile]);
            console.log(response.data.fullProfile,6);
          
          } else {
            setProfiles(response.data.fullProfile);
            console.log(response.data.fullProfile,5);
          }
          setPostSize(response.data.postSize);
          setProfiles([...Profiles, ...response.data.fullProfile]);
        } else {
          console.log(1);
          alert("Failed to fectch post datas");
        }
      });
    };
    
 
    const renderCards = Profiles.map((fullProfile, index) => {
      return (
        <Col lg={3} md={4} xs={8}>
            <Meta description={`$${fullProfile.content}`} />
            <hr/>
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
        {Profiles.length === 0 ? (
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