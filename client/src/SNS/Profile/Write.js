import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import { publicUrl } from "../../Common/components/utils";
import UploadProductPage2 from "./UploadProductPage2";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 50px;
  height: 100%;
  border: 20px double #d7d3d3;
  img {
    width: 150px;
  }
  p {
    color: #ccc;
    font-size: 0.9rem;
  }
`;

const Write = () => {
  const user = useSelector((state) => state.user);

  return (
    <Wrapper>
      <UploadProductPage2 user={user} />
    </Wrapper>
  );
};

export default withRouter(Write);
