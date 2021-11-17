import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 10px;
  color: #525252;
  font-size: 17px;
`;

const SymbolWrap = styled.div`
  padding: 20px 10px;
  font-size: 18px;
  text-align: center;
`;

const Wrap = styled.div`
  padding: 15px 0;
  border-top: 1px dashed #bfbfbf;
`;

const Item = styled.div`
  display: flex;
`;

const Titie = styled.div`
  width: 65px;
`;

const StatusBar = styled.div`
  width: 145px;
  padding: 4px 8px 4px 0;
`;

const UpDown = styled.div`
  border: 1px solid #bfbfbf;
  border-radius: 3px;
  width: 15px;
  height: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 13px;
  color: ${(props) => (props.isUp ? "#de0404" : "#1d76ff")};
`;

const BackBar = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(#d2d2d2, #8c8c8c);
  height: 8px;
  border-radius: 5px;
`;

const ActiveBar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => props.width || 0};
  background-color: ${(props) => props.color || "black"};
  border-radius: 5px 0 0 5px;
`;

const SFWrap = styled.div`
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const SFCount = styled.span`
  display: inline-block;
  margin: 0 5px;
  font-size: 15px;
`;

const ButtonWrap = styled.div`
  margin-top: 5px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 17px;
  color: #525252;
  padding: 0;

  &:after {
    content: "‣";
    display: inline-block;
    width: 14px;
    text-align: center;
  }
`;

function ActivityStatus() {
  return (
    <Container>
      <SymbolWrap>자랑 중인 심볼이 없습니다</SymbolWrap>
      <Wrap>
        <Item>
          <Titie>액티브</Titie>
          <StatusBar>
            <BackBar>
              <ActiveBar width={"10px"} color={"#f35e07"} />
            </BackBar>
          </StatusBar>
          <UpDown isUp={true}>↑</UpDown>
        </Item>
        <Item>
          <Titie>페이머스</Titie>
          <StatusBar>
            <BackBar>
              <ActiveBar width={"37px"} color={"#54bd32"} />
            </BackBar>
          </StatusBar>
          <UpDown isUp={false}>↓</UpDown>
        </Item>
        <Item>
          <Titie>프랜들리</Titie>
          <StatusBar>
            <BackBar>
              <ActiveBar width={"96px"} color={"#169be8"} />
            </BackBar>
          </StatusBar>
          <UpDown isUp={true}>↑</UpDown>
        </Item>
      </Wrap>
      <Wrap>
        <SFWrap>
          스크랩 게시물
          <SFCount>5</SFCount>
        </SFWrap>
        <SFWrap>
          즐겨찾기
          <SFCount>238</SFCount>
        </SFWrap>
        <ButtonWrap>
          <Button>사용중인아이템</Button>
          <Button>소망상자</Button>
        </ButtonWrap>
      </Wrap>
    </Container>
  );
}

export default ActivityStatus;
