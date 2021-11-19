import React, { useState } from "react";
import styled from "styled-components";
import room1 from "../img/room/miniroom1.jpeg"
import room2 from "../img/room/miniroom2.jpeg";
import room3 from "../img/room/miniroom3.jpeg";
import room4 from "../img/room/miniroom4.jpeg";
import room5 from "../img/room/miniroom5.jpeg";
import room6 from "../img/room/miniroom6.jpeg";
import room7 from "../img/room/miniroom7.jpeg";
import DropdownRoom from "./dropdownRoom";

const Container = styled.div`


`;

const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #26a0be;
  margin-bottom: 5px;
`;

const MyMiniroom = styled.div`
  height: 460px;
  min-height: 230px;
  border: 1px solid #bfbfbf;
  background-image: url(${(props) =>
    props.miniroom ? props.miniroom : room1});
`;

const Footer = styled.div`
  background-color: #efefef;
  position: relative;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;

  span {
    vertical-align: middle;
  }

  &:before {
    content: "‣";
    display: inline;
    color: #26a0be;
  }
`;

function MiniRoom() {
  const [isShow, setIsShow] = useState(false);
  const [miniroom, setMiniroom] = useState(0);
  const rArr = [room1, room2, room3, room4, room5, room6, room7];
  return (
    <Container>
      <Header>Miniroom</Header>
      <MyMiniroom miniroom={rArr[miniroom]} />
      <Footer>
        <Button>내 미니룸</Button>
        <Button>미니미설정</Button>
        <Button onClick={() => setIsShow(!isShow)}>미니룸설정</Button>
        <DropdownRoom
          isShow={isShow}
          rArr={rArr}
          setIsShow={setIsShow}
          setMiniroom={setMiniroom}
        />
      </Footer>
    </Container>
  );
}

export default MiniRoom;
