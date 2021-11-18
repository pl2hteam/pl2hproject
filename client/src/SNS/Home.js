
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
import ChangeCondition from "./ChangeCondition";
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


const Home = (props) => {
  const [userConditionData, setuserConditionData] = useState([]);

  const userInfo = useSelector(state => state.user);
  console.log(userInfo);



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

  useEffect(() => {

    getCondition();
  }, []);

  const renderMyImage = 1;
  //Products.map((product, index) => {
  //   return (
  //     <div className="shop-main-content-item_box">
  //       <a href={`/shop/product/${product._id}`}>
  //         <img
  //           className="shop-main-content-item_box-img"
  //           src={`http://localhost:5000/${product.images[0]}`}
  //           alt="productImage"
  //         />
  //         <div className="shop-main-content-item_box-info">
  //           <div className="shop-main-content-item_box-info-name">
  //             {product.pdName}
  //           </div>
  //           <div className="shop-main-content-item_box-info-price">
  //             <img className="purse" src={Purse} alt="money" />
  //             {product.price.toLocaleString("ko-KR")}
  //           </div>
  //         </div>
  //       </a>
  //     </div>
  //   );
  // });




  return (
    <Layout>
      <Sidebar>
        <Cards>
          <FlexWrapper>
            <ProfileSection>
              {/* <img src={publicUrl + { } alt="profile" /> */}
              {/* <div>{userConditionData.message}</div> */}
              {renderMyImage}
              <Link to={'/ChangeCondition'}>내 상태변경</Link>

              <p>{userInfo.userData.message}</p>

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
          <Mini>
            <MiniRoom />
          </Mini>
          <ContentSection>
            <h2>한 줄 감성</h2>
            <Link to={'/ContentProfile'}>방명록</Link>
            <ul>
              <UpdateProfile />
            </ul>
          </ContentSection>
        </Cards>
      </Content>
    </Layout>

  );
};
export default withRouter(Home);