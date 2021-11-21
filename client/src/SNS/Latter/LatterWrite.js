import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import { withRouter } from "react-router";
import './Letter.css';

const LetterWrite = (props) => {
  const userInfo = useSelector(state => state.user);

  const [LetterTo, setLetterTo] = useState("");
  const [LetterTitle, setLetterTitle] = useState("");
  const [LetterContent, setLetterContent] = useState("");
  const [LetterFrom, setLetterFrom] = useState("");
  const [LetterPs, setLetterPs] = useState("");
  const [Code, setCode] = useState("");
  const [Name, setName] = useState("");

  useEffect(() => {
    if (userInfo) {
      if (userInfo.userData) {
        if (userInfo.userData.couple_code) {
          setCode(userInfo.userData.couple_code);
        }
        if (userInfo.userData.name) {
          setName(userInfo.userData.name);
        }
      }
    }
  }, [userInfo])
  
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

    const variables = {
      to: LetterTo,
      title:LetterTitle,
      content:LetterContent,
      from:LetterFrom,
      ps:LetterPs,
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

  if (Code !== null && Code !== undefined) {
    return   <div id="wrap"> 
      <div id='form_wrap'>
        <Form onSubmit={onSubmit}>
          {/* DropZone */}
      
          <label>to</label>
          <Input onChange={onLetterTo} value={LetterTo}  />
        
          <label>제목</label>
          <Input onChange={onLetterTitle} value={LetterTitle} />
        
          <label>내용</label>
          <Input onChange={onLetterContent} value={LetterContent} />
        
          <label>From</label>
          <Input onChange={onLetterFrom} value={LetterFrom} />
        
          <label>추신</label>
          <Input onChange={onLetterPs} value={LetterPs} />
          <br />

          <Button onClick={onSubmit}>편지보내기</Button>
        </Form>
      </div>
    </div>
  } else {
    return <div><p>폄지를 못써요</p></div>
  }
};

export default withRouter(LetterWrite);
