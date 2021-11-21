import React from "react";
import styled from "styled-components";
import RigthtSideBox from '../rightSideBox/rightSideBox';

//책 겉표지
const BorderWrapper = styled.div`
  width: 75%;
  height: 95vh;
  padding: 25px;
  background: #b8e6f2;
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
    <BorderWrapper>
      <BgWrapper>
        {children}
      </BgWrapper>
      <RigthtSideBox/>
    </BorderWrapper>
  );
};

export default Layout;
