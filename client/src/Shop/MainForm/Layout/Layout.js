import React from "react";
import styled from "styled-components";

//책 겉표지
const BorderWrapper = styled.div`
  width: 75%;
  height: 95vh;
  padding: 25px;
  background: RGB(181,214,146);
  border: 3px solid black;
  border-radius: 10px;
`;
//책 안 
const BgWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  height: 100%;
  padding: 20px 8px 8px;
  background: #f2f8fa;
  border: 2px dashed black;
  border-radius: 10px;
`;

const Layout = ({ children }) => {
  return (
    // <Wrapper>
      <BorderWrapper>
        <BgWrapper>{children}</BgWrapper>
      </BorderWrapper>

    // </Wrapper>
  );
};

export default Layout;
