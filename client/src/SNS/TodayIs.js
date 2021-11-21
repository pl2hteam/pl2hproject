import React from "react";
import styled from "styled-components";
import todayIsImg from "../SNS/images/todayIs.png";

const Container = styled.div`
  border: 1px solid #bfbfbf;
  padding: 5px;
`;

const Title = styled.div`
  display: inline-block;
  background: url(${todayIsImg}) no-repeat 0 1px/86px 13px;
  width: 84px;
  height: 13px;
`;

const SelectBox = styled.select`
  border: none;
  font-size: 14px;
  width: 80px;
  background-color: transparent;
`;

const Option = styled.option``;

function TodayIs() {
  return (
    <Container>
      <Title />
      <SelectBox>
        <Option>🥰 행복</Option>
        <Option>😢 슬픔</Option>
        <Option>❤️ 사랑</Option>
        <Option>🤞 KYFC</Option>
      </SelectBox>
    </Container>
  );
}

export default TodayIs;
