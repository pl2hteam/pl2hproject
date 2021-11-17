



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








const ChangeConditon = (props) => {




  const [ProfileContent, setProfileContent] = useState("");




  const onProfileContent = (event) => {
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

      content: ProfileContent,


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
export default withRouter(ChangeConditon);









import styled from "styled-components";
import Layout from "./Layout/Layout";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";
import ContentProfile from './ContentProfile';
import UpdateProfile from "./UpdateProfile";
import MiniRoom from "../Common/miniroom/miniRoom";
import { useSelector } from "react-redux";



////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card } from "antd";

import { withRouter } from "react-router-dom";

////////////////////////////////////////

import { Link } from "react-router-dom";
import {

  MdMailOutline,
  MdLocationOn,
  MdPhoneIphone,
} from "react-icons/md";
import { publicUrl } from "../Common/components/utils"
import ChangeConditon from "./ChangeConditon";
const Mini = styled.div`
width: 100%;
`;
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
const { Meta } = Card;


const Home = () => {
  const [userCondition, setUserCondition] = useState([]);

  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);



  // 내 상태 불러오기
  const getCondion = (body) => {


    Axios.post("/api/mysql/condions/read", body)
      .then((response) => {

        console.log(body, "바디");
        if (response.data.success) {
          console.log(response.data, "데이터");

          setUserCondition([...userCondition, ...response.data.userCondionData]);
        } else {
          console.log("내 상태 변경이 안되었네,,,");
          alert("내 상태 변경이 안되었네,,,");
        }
      });
  };

  useEffect(() => {

    getCondion();
  }, []);



  return (
    <Layout>
      <Sidebar>
        <Cards>
          <FlexWrapper>
            <ProfileSection>
              <img src={publicUrl + "/resources/img/memo_.jpg"} alt="profile" />
              {/* <div>{userCondionData.message}</div> */}
              <Link to={'/ChangeConditon'}>내 상태변경</Link>

            </ProfileSection>
            <ProfileSection>
              <p>
                <span className="my-name">{userInfo.userData.name}</span>
                <span className="my-sex">({userInfo.userData.gender})</span>
                <span className="my-brthdy">{userInfo.userData.birth}</span>
              </p>
              <p>
                <MdMailOutline />
                {userInfo.userData.email}
              </p>
              <p>
                <MdPhoneIphone />
                {userInfo.userData.phone}
              </p>
              <p>
                <MdLocationOn />
                {userInfo.userData.address}
              </p>
            </ProfileSection>
          </FlexWrapper>
        </Cards>
      </Sidebar>
      <Content>


        <Cards>


        </Cards>
      </Content>
    </Layout>

  );
};
export default withRouter(Home);