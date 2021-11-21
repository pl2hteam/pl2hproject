import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import CopyToClipboard from "react-copy-to-clipboard";
import results from './contents/results';
import WarningPage from '../roomMate/WarningPage';
import ButtonComponent from '../../../Common/components/sns/mind/ButtonComponent';

const Wrapper = styled.div`
    display: flex;
    width:100%;
    background-color:${props => props.backgroundColor};

    flex-direction:column;
    align-items:center;
`

const Container = styled.div`
    margin-top:8.6rem;
    margin-bottom:3rem;
`

const ResultSub = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    color:white;
`

const ResultTitle = styled.div`
    font-family:'Jalnan';
    font-size:4.5rem;
    text-align:center;
    color:white;
    margin-top:1.9rem;
    margin-bottom:15.4rem;
`

const ResultImg = styled.img`
    position:absolute;
    width: 36.624rem;
`

const Content = styled.div`
    position:absolute;
    font-family:'Spoqa-Han-Sans';
    font-size:1.2rem;
    color:black;
`

const ResultSquare = styled.div`
    position:relative;
    display:flex;
    margin:2.2rem;

    width: 33.1rem;
    height:${props => props.isNormal < 16 ? '50rem' : '22.9rem'};
    background-color:white;
    border-radius: 0.5rem;

    ${ResultImg}{
        justify-content:center;
        bottom:${props => props.isNormal < 16 ? '32rem' : '14rem'};
        left: -1.6rem;
    }

    ${Content}{
        width: 85%;
        left: 50%;
        word-break: keep-all;

        ${props => props.isNormal < 16 ?
        `transform: translateX(-50%);
        bottom : 2rem;`
        :
        `top: 50%;
        transform: translate(-50%, -50%);`
    };
    }
`

const NormalResult = styled.div`
    display : ${props => props.isNormal < 16 ? 'show' : 'none'};
`

const Title = styled.div`
    font-family:'Jalnan';
    font-size:1.6rem;
    text-align:center;
    color:white;
    margin-top:4.1rem;
`

const FlexLayout = styled.div`
    display:flex;
    justify-content:center;
    margin-left:2.2rem;
    margin-right:2.2rem;
`

const MatchElement = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`

const EmptyPlace = styled.div`
    width:2rem;
`

const SubTitle = styled.div`
    font-family:'Jalnan';
    font-size:1.4rem;
    text-align:center;
    color:white;
    margin-top:3.4rem;
    margin-bottom:1.3rem;
`

const SmallSub = styled.div`
    text-align:center;
    font-family:'Spoqa-Han-Sans';
    font-weight:400;
    font-size:1.1rem;
    color:black;
`

const SmallTitle = styled.div`
    text-align:center;
    font-family:'Jalnan';
    font-weight:400;
    font-size:1.8rem;
    color:black;
`

const MatchImg = styled.img`
    width:15.8rem;
`

const MatchSqaure = styled.div`
    position:relative;
    width:100%;
    height:22.9rem;
    background-color:white;
    border-radius: 0.5rem;
    text-align:center;

    ${SmallSub}{
        margin-top:1.4rem;
    }

    ${SmallTitle}{
        margin-top:1.3rem;
    }

    ${MatchImg}{
        margin-top:0.6rem;
    }

`

const ShareSquare = styled.div`
    width:100%;
    height:20.8rem;
    background-color:white;
    border-radius: 0.5rem;
    margin-top:1.7rem;

    display:flex;
    flex-direction:column;
    align-items:center;
`

const Button = styled.button`
    border: none;
    outline:none;
    background-color:white;
    cursor:pointer;
`

const DeveloperPageLink = styled.div`
    color: '#1F1F1F';
    text-align:center;
    font-family:'Spoqa-Han-Sans';
    font-weight:400;
    font-size:1.2rem;
    margin-top:6.3rem;
`

const BtnToPage = styled(NavLink)`
    text-decoration: none;
    color:${props => props.theme.dark};
`

const Img = styled.img`
`

function ResultPage({ match }) {
    window.scrollTo(0, 0);


    console.log(match);
    const link = window.location.href;
    const finalType = match.params.finalType;

    // const alertMessage = () => {
    //     alert("내 룸미 결과가 클립보드에 담겼어요!");
    // }

    if (finalType <= 16 && finalType >= 0) {
        return (
            <Wrapper backgroundColor={results[finalType].color}>
                <Container>
                    <ResultSub>{Parser(results[finalType].title)}</ResultSub>
                    <ResultTitle>{results[finalType].name}</ResultTitle>
                    <ResultSquare isNormal={finalType}>
                        <ResultImg isNormal={finalType} src={results[finalType].img} />
                        <Content>{Parser(results[finalType].description)}</Content>
                    </ResultSquare>

                    <NormalResult isNormal={finalType}>
                        <Title>🏠 혹시, 룸메이트를 찾고 있나요?</Title>
                        <FlexLayout>
                            <MatchElement>
                                <SubTitle>잘 맞고 좋네요~</SubTitle>
                                <MatchSqaure>
                                    <SmallSub>{Parser(results[results[finalType].best].title)}</SmallSub>
                                    <SmallTitle>{results[results[finalType].best].name}</SmallTitle>
                                    <MatchImg src={results[results[finalType].best].img} />
                                </MatchSqaure>
                            </MatchElement>
                            <EmptyPlace />
                            <MatchElement>
                                <SubTitle>췌h악잇^^엡욧</SubTitle>
                                <MatchSqaure>
                                    <SmallSub>{Parser(results[results[finalType].worst].title)}</SmallSub>
                                    <SmallTitle>{results[results[finalType].worst].name}</SmallTitle>
                                    <MatchImg src={results[results[finalType].worst].img} />
                                </MatchSqaure>
                            </MatchElement>
                        </FlexLayout>
                    </NormalResult>

                    <Title>👍 친구에게 결과 공유하기</Title>
                    <FlexLayout>
                        <ShareSquare>
                            <FlexLayout>
                                <CopyToClipboard text={link}>
                                </CopyToClipboard>
                            </FlexLayout>
                            <BtnToPage exact to='/'><ButtonComponent type={'result-activated'} text={'테스트 다시 하기'} /></BtnToPage>
                            <BtnToPage exact to='/all'><ButtonComponent type={'result-unactivated'} text={'다른 룸메이트 유형 구경하기'} /></BtnToPage>
                        </ShareSquare>
                    </FlexLayout>

                    <BtnToPage exact to='/makers'><DeveloperPageLink>집 주인은 어떤 사람인지 궁금하다면? 클릭!</DeveloperPageLink></BtnToPage>
                </Container>
            </Wrapper>
        );
    } else {
        return (
            <WarningPage />
        )
    }
}

export default ResultPage;