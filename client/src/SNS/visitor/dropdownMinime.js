import React from "react";
import styled from "styled-components";

const SelectMinime = styled.div`
  width: 284px;
  padding: 20px;
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: -250px;
  left: 0;
  z-index: 100;
  border-radius: 5px;
  border: 1px solid black;
`;

const ItemMinime = styled.button`
  width: 60px;
  height: 60px;
  margin: 10px;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: -58px;
  left: 45px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-bottom: 0;
  border-right: 0;
  background-color: beige;
  z-index: 200;
  transform: rotate(45deg);
`;

function DropdownMinime({ isShow, setIsShow, setMinime, mArr }) {
  const handleClick = (e) => {
    setMinime(e.target.id);
    setIsShow(false);
  };
  return isShow ? (
    <>
      <Arrow />
      <SelectMinime>
        {mArr.map((item, idx) => (
          <ItemMinime key={idx}>
            <img src={item} alt={"미니미"} id={idx} onClick={handleClick} />
          </ItemMinime>
        ))}
      </SelectMinime>
    </>
  ) : null;
}

export default DropdownMinime;
