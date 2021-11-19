import styled from "styled-components";
import Layout from "./Layout/Layout";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";
import { useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import MovieFileUpload from './MovieFileUpload'


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



const ChangeCondition = (props) => {
  //const [userCondition, setUserCondition] = useState([]);
  console.log(props);
  console.log(props.user.userData)
  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);

  const [ChangeMyImage, setChangeMyImage] = useState("");
  const [ChangeCoupleCode, setChangeCoupleCode] = useState("");
  const [ChangeMessage, setChangeMessage] = useState("");



  // 내 상태 불러오기
  const getCondition = () => {

    Axios.post("/api/mysql/conditions/read")
      .then((response) => {

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
      });
  };

  //updateImages
  const updateImages = (newImages) => {
    setChangeMyImage(newImages);
  };

  const onChangeCoupleCode = (event) => {
    setChangeCoupleCode(event.currentTarget.value);
  };

  const onChangeMessage = (event) => {
    setChangeMessage(event.currentTarget.value);
  };



  const onSubmit = () => {

    //리액트 서버에서 보내주는 데이터
    const variables = {
      //seller: user.userData._id,
      id: userInfo.userData.id,
      image: ChangeMyImage,
      couple_code: ChangeCoupleCode,
      message: ChangeMessage,
    };

    Axios.post("/api/mysql/conditions/update", variables)
      .then((response) => {
        console.log('props.user 는 : ', response);

        if (response.data.success) {

          alert("정보가 변경되었습니다.");
          props.history.push("/sns/Main");
        } else {
          console.log(response.data)
          alert("정보 변경에 실패하였습니다.");
        }
      });
  };

  let userImg
  if (props.user.userData) {
    userImg = props.user.userData.image
    console.log(props.user.userData.image);
  }




  //////////////////////////////////////////////////////////////////////////////

  // const renderCards = Posts.map((postData, index) => {
  //   if (postData || postData.HashtagId) {
  //     console.log(postData);
  //     return (
  //       <Card >
  //         <article>

  //           <header>
  //             {/* 사용자 정보 */}
  //             <div class="profile-of-article">
  //               <span class="userID main-id point-span">
  //                 <Meta description={`${postData.UserId.name}`} />
  //               </span>
  //             </div>
  //           </header>

  //           {/* 이미지 정보 */}
  //           <div class="main-image">
  //           </div>

  //           {/* 본문 */}
  //           <div class="reaction">
  //             {/* 설명 */}
  //             <div class="description">
  //               <p> <Meta description={`설명 글란 : ${postData.content}`} />🌱</p>
  //             </div>
  //           </div>
  //         </article>
  //       </Card>);
  //   } else {
  //     return null;
  //   }
  // });

  ////////////////////////////////////////////////////////////////////////////


  useEffect(() => {

    getCondition();
  }, []);

  let postvideo = {
    updateImages,
    // updateVideoPath,
    // updateDuration
  }

  return (
    <Layout>
      <Sidebar>
        <Cards>
          <FlexWrapper>
            <ProfileSection>
              <img src={`http://localhost:5000/${userImg}`} alt="profile" />
              <hr />
              <h2>상태메세지</h2>
              <p>{userInfo.userData.message}</p>

            </ProfileSection>
          </FlexWrapper>
        </Cards>
      </Sidebar>
      <Content>
        <Cards>
          <ContentSection>
            {/* ----------------------------------------------------------------------------- */}
            <Form onSubmit={onSubmit}>
              {/* DropZone */}
              <MovieFileUpload refresh={postvideo} />
              {/* <p>
                  <label>프로필 이미지</label>
                  <Input onChange={onChangeMyImage} value={ChangeMyImage} />
                </p> */}
              <p>
                <label>커플코드</label>
                <Input onChange={onChangeCoupleCode} value={ChangeCoupleCode} />
              </p>
              <p>
                <label>상태메세지</label>
                <Input onChange={onChangeMessage} value={ChangeMessage} />
              </p>


              <Button onClick={onSubmit}>수정</Button>
            </Form>
            {/* ----------------------------------------------------------------------------- */}

            <div style={{ width: "75%", margin: "3rem auto" }}>
              <h2>MY CONDITION</h2>
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


            </div>
          </ContentSection>
        </Cards>
      </Content>
    </Layout>

  );
};

export default withRouter(ChangeCondition);