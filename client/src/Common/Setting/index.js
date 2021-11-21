import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 20%;
  font-size: 0.9rem;
  & > div {
    padding: 10px;
    border: 1px solid #a5a5a5;
    border-radius: 5px;
  }
`;

const Setting = () => {
  return (
    <Wrapper>
    </Wrapper>
  );
};

export default withRouter(Setting);
