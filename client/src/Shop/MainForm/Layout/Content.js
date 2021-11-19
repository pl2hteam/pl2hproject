import React from "react";
import styled from "styled-components";
import MainMenu from "../Menu/MainMenu";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    color: black;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const Content = ({ children }) => {
  return (
    <ContentWrapper>
      {/* <h1>검색창 예정</h1> */}
      {children}
      <MainMenu />
    </ContentWrapper>
  );
};

export default Content;
