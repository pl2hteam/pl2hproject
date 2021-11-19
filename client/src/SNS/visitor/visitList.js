import React from "react";
import styled from "styled-components";
import VisitItem from "./visitItem";
import m1 from "../../img/minime/1.png";
import m2 from "../../img/minime/2.png";
import m3 from "../../img/minime/3.png";

const Container = styled.div``;

const List = styled.ul``;

const Item = styled.li`
  color: #525252;
  margin-top: 36px;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
`;

function VisitList() {
  return (
    <Container>
      <List>
        <Item>
          <VisitItem
            num={1}
            img={m1}
            name={"신지은"}
            txt={
              "근데 껐음? 다음날 가보면? 나 이제 연휴니까 오늘 빨리 꺼야지! 하면서 코드 뽑깅 ㅎㅏㄴ거같은데"
            }
          />
        </Item>
        <Item>
          <VisitItem
            num={2}
            img={m3}
            name={"이지혜"}
            txt={"걍 기절해서 잤어 꺼있었음 걱정마! (활활)"}
          />
        </Item>
        <Item>
          <VisitItem
            num={3}
            img={m2}
            name={"양아영"}
            txt={
              "어우 우리사무실 히터 코드에서 불나서 코드랑 멀티탭이랑 다녹았는데"
            }
          />
        </Item>
      </List>
    </Container>
  );
}

export default VisitList;
