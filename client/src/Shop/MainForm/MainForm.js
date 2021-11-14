
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Sidebar from "../Layout/Sidebar";
import Content from "../Layout/Content";
import Cards from "../Layout/Card";
// import ContentProfile from './ContentProfile'
// import UpdateProfile from "./UpdateProfile";


////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col,Card } from "antd";

import { withRouter } from "react-router-dom";

////////////////////////////////////////

import { Link } from "react-router-dom";
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
const { Meta } = Card;
const Home = () => {

  


  // category 는 체크박스랑 라디오 박스를 나누기 위한 것

  // 텍스트 검색


  // default
 
    
  return (
    <Layout>
      <Sidebar>
        <Cards>
          <FlexWrapper>
            <ProfileSection>
              <img src={publicUrl + "/resources/img/memo_.jpg"} alt="profile" />
          
            </ProfileSection>
            <ProfileSection>
              <p>
                <span className="my-name">이단비</span>
                <span className="my-sex">(♀)</span>
                <span className="my-brthdy">1992.08.19</span>
              </p>
              <p>
                <MdMailOutline />
                danbi.db@gmail.com
              </p>
              <p>
                <MdPhoneIphone />
                010-4013-4147
              </p>
              <p>
                <MdLocationOn />
                경기도 안양시
              </p>
            </ProfileSection>
          </FlexWrapper>
        </Cards>
      </Sidebar>
      <Content>
        <Cards>
          <ContentSection>
            <h2>미니룸</h2>
            <div>
              <img
                src={publicUrl + "/resources/img/miniroom.gif"}
                alt="miniroom"
              />
            </div>
          </ContentSection>
          <ContentSection>
            <h2>한 줄 감성</h2>
            {/* <Link to={'/ContentProfile'}>방명록</Link> */}
            <ul>
              {/* <li><UpdateProfile/></li> */}
            </ul>
          </ContentSection>
        </Cards>
      </Content>
    </Layout>

  );
};
export default withRouter(Home);
