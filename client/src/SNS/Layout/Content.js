import React from "react";
import styled from "styled-components";
import MainMenu from "../Menu/MainMenu";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  h1 {
    color: black;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const Content = ({ children }) => {
  return (
    <ContentWrapper>
      <h1>너랑 나의 이야기</h1>
      {children}
      <MainMenu />
    </ContentWrapper>
  );
};

export default Content;
