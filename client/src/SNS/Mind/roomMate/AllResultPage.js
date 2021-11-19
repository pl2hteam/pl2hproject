import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Parser from 'html-react-parser'
import results from './contents/results';
import BoxComponent from '../../../Common/components/sns/mind/BoxComponent';
import ButtonComponent from '../../../Common/components/sns/mind/SYBtnComponent';

const Wrapper = styled.div`
    display: flex;
    width:100%;

    flex-direction: ${props => props.flex || 'column'};
    align-items:center;
`

const Text = styled.div`
    margin-top: ${props => props.top};
    margin-bottom: ${props => props.bottom};

    font-family: 'Jalnan';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.color || 'black'};
    text-align: center;
    display: ${props => props.display};
`

const SmallText = styled(Text)`
    margin-top: 74px;
    margin-bottom: 30px;
    font-family: 'Spoqa-Han-Sans';

    font-weight: 500;
    font-size: 12px;

    color: #A7A7A7;
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


function AllResultPage() {


    results.splice(16, 1);
    window.scrollTo(0, 0);

    const styles = {
        width: '13.9rem',
        height: '12rem',
    }

    return (
        <>
            <Text>
                <Text top='13.1rem' bottom='2.1rem'>🏠</Text>
                <Text display='inline' color='#00462A'>룸메이트&nbsp;</Text>
                <Text display='inline' bottom='0px'>친구들</Text>
                <Text top='1rem' bottom='8.9rem'>여기 여기 모여라!</Text>
            </Text>
            <Wrapper>
                {results.map((results, i) => (
                    <BoxComponent
                        key={'contents-' + i}
                        src={results.img}
                        title={Parser(results.title)}
                        name={results.name}
                        subDesc={results.subdesc}
                        style={styles}
                    />
                ))}
                <Text bottom='74px' />
                <BtnToPage exact to='/sns/Mind/roomMate'><ButtonComponent type={'others-activated'} text={'테스트 다시 하기'} /></BtnToPage>
                <BtnToPage exact to='/sns/Mind/roomMate/makers'><DeveloperPageLink><SmallText>집 주인은 어떤 사람인지 궁금하다면? 클릭!</SmallText></DeveloperPageLink></BtnToPage>
            </Wrapper>
        </>
    );
}

export default AllResultPage;