import React from 'react';
import styled from 'styled-components';
import dd from "./국내여행지도.jpg"

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

const Favorite = () => {
  return (
    <Wrapper><p>
      커플여행지도

가족 친구 연인과의 여행을 기록하면서 지도를 하나씩 색칠해 보세요.

* 독도는 저도 정말 표기하고 싶은데 제가 제공받는 데이터에 독도가 표기되어 있지 않은 것 같아요. 방법을 찾고 있어요. 저도 독도를 정말 표기하고 싶으니 메일로 독도 없다고 일본인이냐고 구박하지 말아주세요..ㅠㅠ *

* 여자친구 남자친구 100일여행 200일여행 다녀와서

* SNS 에서도 당연히 우리 여행기록을 올렸지만 우린 여행을 너무 좋아하는 커플!

* 우리나라 어디어디를 다녀왔는지 한눈에 보고 싶어요 ㅠㅠ 하는 커플!

* 요즘 유행하는 차박! 차박은 장소를 구애받지 않아요.
우리가 어디어디서 차박을 했는지 지도에서 지역을 찾아서 기록해 보세요.

* 지도를 색칠하고, 여행기록을 작성하고 사진도 남겨보세요.

* 내가 색칠한 지도를 다운로드해서 SNS 에 업로드도 해보세요!
    </p>
      <img src={dd}/>
    <a href={dd}  download>다운로드</a> 
    

    </Wrapper>
  );
};

export default Favorite;
