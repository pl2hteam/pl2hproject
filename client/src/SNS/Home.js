
import styled from "styled-components";
import Layout from "./Layout/Layout";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";

import UpdateProfile from "./UpdateProfile";
import MiniRoom from "../Common/miniroom/miniRoom";
import { useSelector } from "react-redux";
import img from "../Common/img/minime/연인.png"
import VisitorWriting from "./visitor/VisitorWriting";



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
  MdEdit,
} from "react-icons/md";
import { publicUrl } from "../Common/components/utils"
import ChangeCondition from "./MyPage/ChangeCondition";
import TodayIs from "./TodayIs";
const Mini = styled.div`
width: 100%;
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

`;
const FlexWrapperImage = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    width: 250px;
    height: 250px;

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


const Home = (props) => {
  const [CC1, setCC1] = useState([]);
  const [CC2, setCC2] = useState([]);

  console.log(props);

  //const [userConditionData, setUserConditionData] = useState([]);

  const userInfo = useSelector(state => state.user);
  console.log(userInfo);

  let userImg
  if (props.user.userData) {
    userImg = props.user.userData.image
    console.log(props.user.userData.image);
  }






  // // 내 상태 불러오기
  // // const getCondition = () => {
  // const renderCards =
  //   Axios.post("/api/mysql/conditions/read")
  //     .then((response) => {
  //       console.log(response);
  //       console.log(response.data.userConditionData);
  //       console.log(response.data.userConditionData[0]);
  //       console.log(response.data.userConditionData[0].image);


  //       // console.log(body, "바디");
  //       // if (response.data.success) {
  //       //   console.log(response.data, "데이터");

  //       //   setUserCondition([...userCondition, ...response.data.userConditionData]);
  //       // } else {
  //       //   console.log("내 상태 변경이 안되었네,,,");
  //       //   alert("내 상태 변경이 안되었네,,,");
  //       // }
  //     });
  // // };

  // // useEffect(() => {

  // //   getCondition();
  // // }, []);




  // const renderMyImage = () => {
  //   // return (
  //   //   <img
  //   //     className="shop-main-content-item_box-img"
  //   //     src={`http://localhost:5000/${product.images[0]}`}
  //   //     alt="productImage"
  //   //   />

  //   // )

  // }

  const getCondition = () => {

    // console.log("UserInfo", userInfo);

    // const variables = {
    //   //seller: user.userData._id,
    //   id: userInfo.userData.id,
    // };

    // console.log(variables);


    Axios.post("/api/mysql/conditions/read")
      .then((response) => {
        // console.log(response);
        // console.log(response.config);
        // console.log(response.config.data);
        //console.log(response.config.data.id);

        // if (response.data.success) {
        //   console.log(response.data, "데이터");

        //   setUserCondition([...userCondition, ...response.data.userConditionData]);
        //   console.log("response.data.userConditionData", response.data.userConditionData);
        //   console.log(12321323213, response.data.userConditionData[0].message);
        //   //console.log(userConditionData);
        // } else {
        //   console.log("내 상태 변경이 안되었네,,,");
        //   alert("내 상태 변경이 안되었네,,,");
        // }
        //console.log(response.data);
        // if (response.data.success) {
        //   setUserConditionData([...userConditionData]);
        // }
      });


  };

  const getCouple = () => {


    Axios.post("/api/mysql/couples/read")
      .then((response) => {
        console.log(99999999999, response);
        console.log(99999999999, response.data.allUser);

        const arr = response.data.allUser;
        console.log(arr);

        for (let i = 0; i < arr.length; i++) {

          if (arr[i].couple_code === userInfo.userData.couple_code) {
            if (arr[i].name !== userInfo.userData.name && userInfo.userData.couple_code !== null) {
              console.log(arr[i].couple_code);
              console.log(userInfo.userData.couple_code);
              setCC1(userInfo.userData.name)
              setCC2(arr[i].name)
              break;
            }
          } else {
          }
        }
      });
  }
  console.log(9987666666666);

  useEffect(() => {

    getCondition();
  }, []);

  const couplelove = () => {
    if (userInfo.userData.couple_code === "9999" && userInfo.userData.couple_code === "9999") {
      return <div>(♀)</div>
    } else if (userInfo.userData.couple_code !== "9999" && userInfo.userData.couple_code !== "9999") {
      return <div className="couple">
        <img src={img} />
        <p>{CC1}♥️{CC2}</p>
      </div>
    }
  };
  const genderImoticon = () => {
    if (userInfo.userData.gender == 1) {
      return <div>(♀)</div>
    } else {
      return <div>(♂)</div>
    }
  }
  return (
    <Layout>
      <Sidebar>
        <Cards>
          <TodayIs />
          <FlexWrapper>
            <ProfileSection >
              <ContentProfile props={props} />
              <Link to={'/ChangeCondition'}><MdEdit />eidt</Link>

              <div className="couple">
                {couplelove()}
              </div>


            </ProfileSection>



            <ProfileSection>
              <p>
                <span className="my-name">{userInfo.userData.name}</span>

                <span className="my-sex">{genderImoticon()}</span>
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
          <Mini>
            <MiniRoom />
          </Mini>
          <ContentSection>
            <h2>한 줄 감성</h2>
            <p>{getCouple()}</p>
            <VisitorWriting />

            <UpdateProfile />



          </ContentSection>
        </Cards>
      </Content>
    </Layout>

  );
};
export default withRouter(Home);