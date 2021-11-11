
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Sidebar from "../Layout/Sidebar";
import Content from "../Layout/Content";
import Card from "../Layout/Card";
import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { Typography, Button, Form, message, Input } from "antd";
import { withRouter } from "react-router";

import {

  MdMailOutline,
  MdLocationOn,
  MdPhoneIphone,
} from "react-icons/md";
import { publicUrl } from "../../Common/components/utils"

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ContentSection = styled.section`
  height: fit-content !important;
  h2 {
    padding: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    color: green;
  }
  &:first-of-type {
    h2 {
      margin-bottom: 5px;
    }
    div {
      width: 100%;
      min-height: 200px;
      img {
        width: 100%;
      }
    }
  }
  &:last-of-type {
    margin-top: 20px;
    h2 {
      margin-bottom: 15px;
      border-bottom: 2px solid #eee;
    }
  }
  ul {
    line-height: 1.8;
    li {
      height: 30px;
      border-bottom: 1px dashed #a5a5a5;
    }
  }
`;

const ProfileSection = styled.section`
  height: fit-content !important;
  &:last-of-type {
    padding: 10px 0;
    border-top: 1px dashed #a5a5a5;
    p {
      display: flex;
      align-items: center;
      margin: 10px 0;
    }
    svg {
      margin-right: 3px;
      color: #666;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .my-name {
    margin-right: 5px;
    color: green;
    font-size: 1rem;
    font-weight: bold;
  }
  .my-sex,
  .my-brthdy {
    color: #9e9e9e;
    font-size: 0.85rem;
  }
  .my-sex {
    margin-right: 2px;
    font-size: 0.8rem;
  }
`;

const LinkTitle = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 0;
  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
  cursor: pointer;
  svg {
    margin-right: 5px;
    color: #666;
    font-size: 1.2rem;
  }
  &:hover {
    color: green;
  }
`;
const { Title } = Typography;
const { TextArea } = Input;













const LetterWrite = (props) => {



  const [LetterTo, setLetterTo] = useState("");
  const [LetterTitle, setLetterTitle] = useState("");
  const [LetterContent, setLetterContent] = useState("");
  const [LetterFrom, setLetterFrom] = useState("");
  const [LetterPs, setLetterPs] = useState("");

  const onLetterTo= (event) => {
    setLetterTo(event.currentTarget.value);
  
  };
  const onLetterTitle= (event) => {
    setLetterTitle(event.currentTarget.value);
  
  };
  const onLetterContent= (event) => {
    setLetterContent(event.currentTarget.value);
  
  };
  const onLetterFrom= (event) => {
    setLetterFrom(event.currentTarget.value);
  
  };
  const onLetterPs= (event) => {
    setLetterPs(event.currentTarget.value);
  
  };
  
  const user = useSelector(state => state.user);
  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !LetterTo ||
      !LetterTitle ||
      !LetterContent ||
      !LetterFrom ||
      !LetterPs
      
    ) {
      return alert("fill all the fields first!");
    }

    // console.log('props id 는 : ', props.user.userData._id);
    const variables = {
      //seller: user.userData._id,
      to: LetterTo,
      title:LetterTitle,
      content:LetterContent,
      from:LetterFrom,
      ps:LetterPs
   
    };

    Axios.post("/api/mysql/letters/write", variables)
      .then((response) => {
        console.log('props.user 는 : ', response);
        if (response.data.success) {
   
          alert("Product Successfully Uploaded");
          props.history.push("/sns/Latter");
        } else {
          console.log(response.data)
          alert("Failed to upload Product");
        }
      });
  };




  

  return (
    <div>
       <Form onSubmit={onSubmit}>
        {/* DropZone */}
       

        <br />
        <br />
        <label>to</label>
        <Input onChange={onLetterTo} value={LetterTo} />
        <br />
        <label>제목</label>
        <Input onChange={onLetterTitle} value={LetterTitle} />
        <br />
        <label>내용</label>
        <Input onChange={onLetterContent} value={LetterContent} />
        <br />
        <label>~에게</label>
        <Input onChange={onLetterFrom} value={LetterFrom} />
        <br />
        
        <label>추신</label>
        <Input onChange={onLetterPs} value={LetterPs} />
        <br />
        
      

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
  
    </div>
  );
};
export default withRouter(LetterWrite);
