import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 10;
  overflow-y: scroll;
  width: 100%;
  height: 96%;
  margin-top: 10px;
  padding: 20px;

  border-radius: 10px;

  section {
    width: 100%;
    height: 100%;
  }
  /* &::-webkit-scrollbar {
    display: none;
  } */
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
  }
`;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
