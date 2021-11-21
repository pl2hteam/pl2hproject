import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.div`
  background-color: #efefef;
  padding: 10px 15px;
  font-size: 16px;
  vertical-align: middle;

  span:not(:first-child) {
    margin-left: 15px;
  }

  span {
    vertical-align: bottom;
  }
`;

const Index = styled.span`
  font-size: 12px;
  span {
    font-size: 13px;
  }
`;

const VisitorName = styled.span`
  color: #4871a2;
  &:after {
    content: "🏠";
    display: inline-block;
    margin-left: 5px;
  }
`;

const VisitDate = styled.span`
  font-size: 14px;
`;

const InnerContainer = styled.div`
  padding: 15px;
  display: flex;
`;

const ShowMiniMe = styled.div`
  width: 130px;
  height: 130px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  width: 336px;
  min-height: 130px;
  padding: 20px;
  font-size: 16px;
`;

function VisitItem(props) {
  return (
    <Container>
      <Header>
        <Index>
        </Index>
      </Header>
      <InnerContainer>
        <ShowMiniMe>
          <img src={props.img} alt={"미니미"} />
        </ShowMiniMe>
        <Text>{props.txt}</Text>
      </InnerContainer>
    </Container>
  );
}

export default VisitItem;
