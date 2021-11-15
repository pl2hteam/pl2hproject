



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








const ContentProfile = (props) => {



  
  const [ProfileContent, setProfileContent] = useState("");
 
  
  
 
  const onProfileContent= (event) => {
    setProfileContent(event.currentTarget.value);
  
  };
 
  
  const user = useSelector(state => state.user);
  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      
      !ProfileContent 
    
    ) {
      return alert("fill all the fields first!");
    }

    // console.log('props id 는 : ', props.user.userData._id);
    const variables = {
      //seller: user.userData._id,
     
      content:ProfileContent,
      
   
    };

    Axios.post("/api/mysql/profiles/write", variables)
      .then((response) => {
        console.log('props.user 는 : ', response);
        if (response.data.success) {
   
          alert("Product Successfully Uploaded");
          props.history.push("/sns/main");
        } else {
          console.log(response.data)
          alert("Failed to upload Product");
        }
      });
  };




  

  return (
    
      
       <Form onSubmit={onSubmit}>
        {/* DropZone */}
       

       
     
     
        <label>내용</label>
        <Input onChange={onProfileContent} value={ProfileContent} />
      
   
      

        <Button onClick={onSubmit}>편지보내기</Button>
      </Form>
  
   
  );
 };
export default withRouter(ContentProfile);
