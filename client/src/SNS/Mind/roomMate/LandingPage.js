import React, { useState } from 'react';
import styled from 'styled-components';
import StartButtonComponent from '../../../Common/components/sns/mind/StartButtonComponent';
import QuizPage from '../roomMate/QuizPage';
import PL2H from '../../assets/common/ewhasymbol.png';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    width:100%;
    background-color:white;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Container = styled.div`
    margin-top:18.6rem;
    margin-bottom:3rem;
    text-align:center;
`
const Intro = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    color:#A7A7A7;
    margin-bottom:4rem;
`
const Title = styled.div`
    font-family:'Jalnan';
    font-size:2.5rem;
    text-align:center;
    color:#00462A;
    margin-top:1.9rem;
    margin-bottom:8.4rem;
`
const Footer = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    margin-top:8.9rem;
    color:#A7A7A7;
`

const Logo = styled.img`
    width: 1.2rem;
`

function LandingPage() {

    const [isShow, setIsShow] = useState(true);
    const [isQuizShow, setIsQuizShow] = useState(false);

    const onClickStartBtn = () => {
        setIsShow(false);
        setIsQuizShow(true);
    }
    return (
        <>

            <Wrapper isShow={isShow}>
                <Container>
                    <Intro>나는 어떤 유형의 룸메이트일까?<br /> 룸메이트 유형 찾기 테스트</Intro>
                    <Title>find my Roomie</Title>
                    <StartButtonComponent type={true} text={"시작하기"} onclick={onClickStartBtn} />
                    <Footer>made by PL2H &nbsp;<Logo src={PL2H} /></Footer>
                </Container>
            </Wrapper>
            <QuizPage isShow={isQuizShow} />
        </>
    );
}

export default LandingPage;