import React from "react";
import styled from "styled-components";

const SelectRoom = styled.div`
  width: 100%;
  padding: 20px;
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 35px;
  left: 0;
  z-index: 100;
  border: 1px solid black;
  border-radius: 5px;
  
`;

const Arrow = styled.div`
  position: absolute;
  top: 25px;
  left: 180px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-bottom: 0;
  border-right: 0;
  background-color: beige;
  z-index: 200;
  transform: rotate(45deg);
  
`;

const ItemRoom = styled.button`
  width: 60px;
  height: 60px;
  margin: 10px;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

function DropdownRoom({ isShow, rArr, setIsShow, setMiniroom }) {
  const handleClick = (e) => {
    setMiniroom(e.target.id);
    setIsShow(false);
  };
  return isShow ? (
    <>
      <Arrow />
      <SelectRoom>
        {rArr.map((item, idx) => (
          <ItemRoom key={idx}>
            <img src={item} alt={"미니룸"} id={idx} onClick={handleClick}/>
          </ItemRoom>
        ))}
      </SelectRoom>
    </>
  ) : null;
}

export default DropdownRoom;
