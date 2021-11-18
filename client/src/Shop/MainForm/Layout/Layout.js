import React from "react";
import styled from "styled-components";
import Setting from "../../../Common/Setting";

//책 겉표지
const BorderWrapper = styled.div`
  min-width: 1060px;
  width: 75%;
  height: 95vh;
  padding: 25px;
  background: rgb(84, 92, 143);
  border: 3px solid black;
  border-radius: 10px;
`;
//책 안
const BgWrapper = styled.div`
  color: white;
  z-index: 1;
  position: relative;
  display: flex;
  height: 100%;
  padding: 20px 8px 8px;
  background: #f2f8fa;
  border: 2px dashed white;
  border-radius: 10px;
  background-color: rgb(51, 58, 100);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <BorderWrapper>
        <BgWrapper>{children}</BgWrapper>
      </BorderWrapper>
      <Setting />
    </Wrapper>
  );
};

export default Layout;
