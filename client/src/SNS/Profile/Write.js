import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { publicUrl } from '../../Common/components/utils'
import UploadProductPage2 from './UploadProductPage2';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 50px;
  border: 20px double #d7d3d3;
  img {
    width: 150px;
  }
  p {
    color: #ccc;
    font-size: 0.9rem;
  }
`;

const Write = (props) => {

  return (
    <Wrapper>
      <UploadProductPage2 />
  
    </Wrapper>
  );
};

export default withRouter(Write);
