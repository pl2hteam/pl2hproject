import React, { useState, useEffect } from "react";
import styled from "styled-components";
import m1 from "../../Common/img/minime/1.png"
import m2 from "../../Common/img/minime/2.png";
import m3 from "../../Common/img/minime/3.png";
import m4 from "../../Common/img/minime/4.png";
import m5 from "../../Common/img/minime/5.png";
import m6 from "../../Common/img/minime/6.png";
import DropdownMinime from "./dropdownMinime";
import "./VisitorWriting.css"
import Axios from "axios";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { Button, Form } from "antd";

=======
import { Typography, Button, Form, message, Input } from "antd";
import { withRouter } from "react-router-dom";
>>>>>>> origin/minnnnnn
const Container = styled.div`
  padding: 15px 15px 0;
  background-color: #efefef;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
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

const SettingMinime = styled.div`
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
  width: calc(100% - 130px);
  height: 130px;
  margin-left: 6px;
  background-color: #fff;
  padding: 15px;
  resize: none;
  color: #525252;
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

function VisitorWriting() {
  const user = useSelector(state => state.user);
  const [isShow, setIsShow] = useState(false);
  const [minime, setMinime] = useState(0);
  const mArr = [m1, m2, m3, m4, m5, m6];
  const [ProfileContent, setProfileContent] = useState("");
 
  const onProfileContent= (event) => {
    setProfileContent(event.currentTarget.value);
  };
 
  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !ProfileContent 
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      content:ProfileContent,
    };

    console.log(variables);

    Axios.post("/api/mysql/profiles/write", variables)
      .then((response) => {
        console.log('props.userInfo 는 : ', response);
        if (response.data.success) {
          alert("Product Successfully Uploaded");
          window.location.replace("/sns/main");
        } else {
          console.log(response.data)
          alert("Failed to upload Product");
        }
      });
  };

  return (
  <Form onSubmit={onSubmit}>
    <Container>
      <Wrap className="VisitMsgBox">
        <ShowMiniMe className="VisitMsgBox-ImageBox">
          <img src={mArr[minime]} alt={"미니미"} />
          <SettingMinime onClick={() => setIsShow(!isShow)}>
                미니미
          </SettingMinime>
          <DropdownMinime
                isShow={isShow}
                setIsShow={setIsShow}
                setMinime={setMinime}
                mArr={mArr}
              />
        </ShowMiniMe>
          <VisitMsg  onChange={onProfileContent} value={ProfileContent}/>
          <Button onClick={onSubmit}>편지보내기</Button>
      </Wrap>
    </Container> 
  </Form>
  );
}

export default VisitorWriting;
