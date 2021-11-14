
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Sidebar from "../Layout/Sidebar";
import Content from "../Layout/Content";
import Card from "../Layout/Card";
import Letter from './Letter.css'
import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { Typography, Button, Form, message, Input } from "antd";
import { withRouter } from "react-router";

// import {

//   MdMailOutline,
//   MdLocationOn,
//   MdPhoneIphone,
// } from "react-icons/md";
// import { publicUrl } from "../../Common/components/utils"




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
    <div id="wrap"> 
    <div id='form_wrap'>
       <Form onSubmit={onSubmit}>
        {/* DropZone */}
       

       
     
        <label>to</label>
        <Input onChange={onLetterTo} value={LetterTo} />
      
        <label>제목</label>
        <Input onChange={onLetterTitle} value={LetterTitle} />
      
        <label>내용</label>
        <Input onChange={onLetterContent} value={LetterContent} />
      
        <label>~에게</label>
        <Input onChange={onLetterFrom} value={LetterFrom} />
      
        <label>추신</label>
        <Input onChange={onLetterPs} value={LetterPs} />
        <br />
        
      

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
  
    </div>
    </div>
  );
};
export default withRouter(LetterWrite);
