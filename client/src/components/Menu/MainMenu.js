import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
      background: ${props => props.theme.mainColor.color};
      border: 1px solid #a5a5a5;
      border-radius: 10px;
      color: #fff;
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
  return (
    <Nav>
      <ul>
        <li>
          <NavLink exact to="/home" activeClassName="selected">
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="selected">
           SNS
          </NavLink>
        </li>
        <li>
          <NavLink to="/Jam" activeClassName="selected">
            놀거리
          </NavLink>
        </li>
        <li>
          <NavLink to="/Latter" activeClassName="selected">
            편지
          </NavLink>
        </li>
        <li>
          <NavLink to="/Mind" activeClassName="selected">
            심리
          </NavLink>
        </li>
        <li>
          <NavLink to="/Pic" activeClassName="selected">
            사진첩
          </NavLink>
        </li>
        <li>
          <NavLink to="/Calendar" activeClassName="selected">
            캘린더
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default MainMenu;
