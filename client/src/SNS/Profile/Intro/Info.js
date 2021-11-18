import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Post from '../../Layout/Post';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  padding: 40px;
  text-align: center;
  .info {
    &:first-of-type {
      margin-top: 0;
    }
  }
  h4 {
    color: #238db3;
    font-weight: bold;
    font-size: 1.5rem;
  }
  p,
  ul {
    margin: 10px 0;
    line-height: 20px;
  }
  li {
    margin: 5px 0;
  }
  .date {
    color: #aaa;
    font-weight: bold;
    font-size: 0.95rem;
  }
`;

const Info = ({ props }) => {

  const userInfo = useSelector((state) => state.user);
  return (
      <Wrapper>
        <div className="info">
          <h4>이름</h4>
          <p>{userInfo.userData.name}</p>
        </div>
        <div className="info">
          <h4>생년월일</h4>
          <p>{userInfo.userData.gender}</p>
        </div>
        <div className="info">
          <h4>성별</h4>
          <p>{userInfo.userData.gender}</p>
        </div>
        <div className="info">
          <h4>거주지</h4>
          <p>{userInfo.userData.gender}</p>
        </div>
        <div className="info">
          <h4>휴대폰</h4>
          <p>{userInfo.userData.gender}</p>
        </div>
        <div className="info">
          <h4>이메일</h4>
          <p>{userInfo.userData.email}</p>
        </div>
      </Wrapper>
  );
};

export default withRouter(Info);
