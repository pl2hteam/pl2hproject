// import React from "react";


////////////////////////////////////////

import styled from "styled-components";
// import m1 from "./visitor/img/minime/1.png"
// import m2 from "./visitor/img/minime/2.png";
// import m3 from "./visitor/img/minime/3.png";
// import m4 from "./visitor/img/minime/4.png";
// import m5 from "./visitor/img/minime/5.png";
// import m6 from "./visitor/img/minime/6.png";
// import DropdownMinime from "./visitor/dropdownMinime"
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import Delete from './RegisterPage/delete'
import { withRouter } from "react-router";


import m1 from "../Common/img/minime/1.png"
import m2 from "../Common/img/minime/2.png"
import m3 from "../Common/img/minime/3.png"
import VisitItem from "./visitor/visitItem";


const Container = styled.div`
  padding: 15px 15px 0;
  background-color: #efefef;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
`;

const Header = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 1px solid #bfbfbf;
  color: #525252;
  padding: 5px;
  width: 130px;

  &:not(:first-child) {
    margin-left: 5px;
    width: 150px;
  }
`;

const Wrap = styled.div`
  display: flex;
`;

const ShowMiniMe = styled.div`
  width: 130px;
  height: 130px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SettingMinime = styled.button`
  position: absolute;
  bottom: -30px;
  left: 30px;
  border: none;
  font-size: 16px;
  color: #525252;

  &:after {
    content: "▾";
    display: inline-block;
    font-size: 16px;
    color: #de5300;
    margin-left: 3px;
    vertical-align: text-bottom;
  }
`;

const VisitMsg = styled.textarea`
  border: 1px solid #bfbfbf;
  width: 330px;
  height: 130px;
  margin-left: 6px;
  background-color: #fff;
  padding: 15px;
  resize: none;
  color: #525252;
`;

const Item = styled.li`
  color: #525252;
  margin-top: 36px;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
`;
const Footer = styled.div`
  text-align: right;
  padding: 5px 0;
`;

const SaveBtn = styled.button`
  background-color: #fff;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 3px 8px;
  font-size: 16px;
  color: #525252;
`;
const { Meta } = Card;

const UpdateProfile = () => {
  // const [isShow, setIsShow] = useState(false);
  // const [minime, setMinime] = useState(0);
  // const mArr = [m1, m2, m3, m4, m5, m6];

  const [Profiles, setProfiles] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(2);
  const [PostSize, setPostSize] = useState(0);


  // 상품목록 불러오기
  const getProfiles = (body) => {


    Axios.post("/api/mysql/profiles/read", body).then((response) => {

      console.log(body, 2);
      if (response.data.success) {
        console.log(response.data, 4);

        if (body.loadMore) {
          setProfiles([...Profiles, ...response.data.fullProfile]);
          console.log(response.data.fullProfile, 6);

        } else {
          setProfiles(response.data.fullProfile);
          console.log(response.data.fullProfile, 5);
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

      <easy>
  <Item>
          <VisitItem
            num={1}
            img={m1}
            name={"신지은"}
            txt={
              <easy>{fullProfile.content}</easy>
            }
          />
        <Delete profile={fullProfile} />
        </Item>
      </easy>





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


      {/* 등록된 상품이 0개면 "상품없다고 출력  */}
      {Profiles.length === 0 ? (
        <div

        >
          <h2>등록된 댓글이 없습니다</h2>
        </div>
      ) : (



        <div>{renderCards}</div>


      )}



    </div>
  );
};

export default withRouter(UpdateProfile);



