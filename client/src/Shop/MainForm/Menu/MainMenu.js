import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* 버튼색 */
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

const MainMenu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink exact to="/shop/main" activeClassName="selected">
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/profile" activeClassName="selected">
            상품
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/main" activeClassName="selected">
            이벤트
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/main" activeClassName="selected">
            구매
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/main" activeClassName="selected">
            장바
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/upload" activeClassName="selected">
            등록
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default MainMenu;
