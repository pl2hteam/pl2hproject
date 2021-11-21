import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//버튼색
const Nav = styled.nav`
  z-index: -1;
  position: absolute;
  top: 70px;
  right: -70px;
  ul {
    a {
      display: inline-block;
      width: 85px;
      margin-bottom: 2px;
      padding: 10px 10px 10px 15px;
      background: #e6eaf0;
      border: 2px solid black;
      border-radius: 10px;
      color: black;
      font-size: 0.9rem;
      text-align: center;
      &.selected {
        background: #fff;
        color: #333;
      }
    }
  }
`;

function MainMenu() {
  const userInfo = useSelector(state => state.user);

  const [CoupleCode, setCoupleCode] = useState({});

  useEffect(() => {
    if (userInfo) {
      if (userInfo.userData) {
        if (userInfo.userData.couple_code) {
          setCoupleCode(userInfo.userData.couple_code);
        }
      }
    }
  }, [userInfo])

if(CoupleCode ==="9999"){return (
  <Nav>
    <ul>
      <li>
        <NavLink exact to="/sns/main" activeClassName="selected">
          홈
        </NavLink>
      </li>
      <li>
        <NavLink to="/sns/profile" activeClassName="selected">
          SNS
        </NavLink>
      </li>
      <li>
        <NavLink to="/sns/Jam" activeClassName="selected">
          놀거리
        </NavLink>
      </li>     
    </ul>
  </Nav>
);}else if(CoupleCode !=="9999"){
  return(
    <Nav>
    <ul>
      <li>
        <NavLink exact to="/sns/main" activeClassName="selected">
          홈
        </NavLink>
      </li>
      <li>
        <NavLink to="/sns/profile" activeClassName="selected">
          SNS
        </NavLink>
      </li>
      <li>
        <NavLink to="/sns/Jam" activeClassName="selected">
          놀거리
        </NavLink>
      </li>
      <li>
        <NavLink to="/sns/Latter" activeClassName="selected">
          편지
        </NavLink>
      </li>
      <li>
        <NavLink to="/sns/Mind" activeClassName="selected">
          심리
        </NavLink>
      </li>
      <li>
        <NavLink to="/sns/Pic" activeClassName="selected">
          사진첩
        </NavLink>
      </li>     
    </ul>
  </Nav>
  )
}
 
}

export default MainMenu;
