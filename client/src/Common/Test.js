import React, { useState } from "react";

function Test() {
  const [CodeCode, setCodeCode] = useState("");
  const [Length, setLength] = useState("8");
  const [LowerCheck, setLowerCheck] = useState(true);
  const [UpperCheck, setUpperCheck] = useState(true);
  const [NumberCheck, setNumberCheck] = useState(true);
  const [SymbolCheck, setSymbolCheck] = useState(false);

  const inputLength = (e) => {
    setLength(e.target.value);
  };
  const LowerCheckSwitch = (e) => {
    setLowerCheck(!LowerCheck);
  };
  const UpperCheckSwitch = (e) => {
    setUpperCheck(!UpperCheck);
  };
  const NumberCheckSwitch = (e) => {
    setNumberCheck(!NumberCheck);
  };
  const SymbolCheckSwitch = (e) => {
    setSymbolCheck(!SymbolCheck);
  };

  // 랜덤 코드 만드는 옵션별 함수를 담아둠
  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  // crypto.getRandomValues() : 함수는 암호학적으로 강력한 수준의 임의의(random) 값을 생성.
  //                            매개 변수로 제공된 배열은 임의의 숫자로 채움 (암호화의 의미는 무작위)
  function secureMathRandom() {
    return (
      window.crypto.getRandomValues(new Uint32Array(1))[0] /
      (Math.pow(2, 32) - 1)
    );
  }
  // Math.random()  : 0에서 1 소수점 랜덤 반환
  // Math.floor()   : 소수점 버림
  // fromCharCode() : 메서드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환
  // 소문자 랜덤생성
  function getRandomLower() {
    // 해석 : 랜덤 소수점을 알파벳(26자)만큼 곱하고 97을 더한 값을 소수점을 버린 정수에
    //        해당하는 알파벳을 반환
    //        아스키코드 97~122번, 대문자는 65~90번, 숫자는 48~57번이기 때문
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  // 대문자 랜덤생성
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  // 숫자 랜덤생성
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
  }
  // 특수문자 랜덤생성
  function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  // 옵션대로 코드 만들어낼 함수
  function generateCode(length, lower, upper, number, symbol) {
    // 결과물의 초기값은 빈값 ""
    let generatedCode = "";
    // filter 거쳐서 typesArr 에 배열로 담기
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      // filter 로 각 옵션(객체)들의 배열 인덱스0 에서 false 거르기
      (item) => Object.values(item)[0]
    );

    // 입력한 코드 길이만큼 for문 돌리기
    for (let i = 0; i < length; i++) {
      // 옵션 수 만큼 forEach 돌리기
      typesArr.forEach((type) => {
        // forEach 해당회차의 옵션을 funcName에 담음
        const funcName = Object.keys(type)[0];
        // randomFunc 함수에서 해당회차 옵션명에 해당하는 함수 돌려서 나온 값을 결과에 추가                          //
        generatedCode += randomFunc[funcName]();
      });
    }
    // 결과물 배열 잘라서 반환
    return generatedCode.slice(0, length);
  } ////////////////////////////////////////////////함수 분석
  // 입력한 길이만큼 소문자, 대문자, 숫자, 특수문자 순으로 결과를 뱉어낸다
  // 그럼 (true인 옵션 수) * (입력한 길이) 의 결과물이 나오고
  // 결과물에서 입력했던 길이만큼만 잘라낸다 ((옵션수*길이)-길이) 만큼의 코드는 버리게 됨

  // function CodeCodeCreator() {
  //   if (Length < 8) {
  //     alert("코드가 너무 적어요 8자 이상으로 해주세요");
  //   } else {
  //     setCodeCode(
  //       generateCode(Length, LowerCheck, UpperCheck, NumberCheck, SymbolCheck)
  //     );
  //   }
  // }
  function CodeCodeCreator() {
    if (Length < 8) {
      alert("코드가 너무 적어요 8자 이상으로 해주세요");
    } else if (LowerCheck || UpperCheck || NumberCheck || SymbolCheck) {
      setCodeCode(
        generateCode(Length, LowerCheck, UpperCheck, NumberCheck, SymbolCheck)
      );
    } else {
      alert("선택된 옵션이 없어요");
    }
  }

  return (
    <div style={{ margin: "300px 300px" }}>
      {/* <input
        style={{ width: "70px" }}
        type="number"
        onChange={inputLength}
        value={Length}
      />
      개의 코드를 생성합니다
      <br />
      옵션
      <br />
      <input type="checkbox" onChange={LowerCheckSwitch} />
      소문자
      <br />
      <input type="checkbox" onChange={UpperCheckSwitch} />
      대문자
      <br />
      <input type="checkbox" onChange={NumberCheckSwitch} />
      숫자
      <br />
      <input type="checkbox" onChange={SymbolCheckSwitch} />
      특수문자
      <br /> */}
      <button onClick={CodeCodeCreator}>코드생성버튼</button>
      <div>
        <br />
        출력 코드
        <br />
        {CodeCode}
      </div>
    </div>
  );
}

export default Test;
