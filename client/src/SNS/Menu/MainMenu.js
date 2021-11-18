import React from "react";
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

function MainMenu(props) {
  const userInfo = useSelector(state => state.user);
  console.log(userInfo,313199999);



if(userInfo.userData.couple_code !==null){return (
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
      <li>
        <NavLink to="/sns/Calendar" activeClassName="selected">
          캘린더
        </NavLink>
      </li>
    
     
    </ul>
  </Nav>
);}else{
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
     
    
     
    </ul>
  </Nav>
  )
}
 
}

export default MainMenu;
