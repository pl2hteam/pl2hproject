import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 32.7rem;
    height: 13rem;
    margin: auto auto 2rem auto;

    border: 0.3rem solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 10px;
`

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin-left:1rem;
    margin-top:${props => props.type === 'dev' ? '0.6rem' : ''};
`

const Img = styled.div`
    margin-top:0.4rem;
`

const TextWrapper = styled.div`
    flex-direction:column;
    align-items:center;
    margin-right:2rem;
`

const Desc = styled.div`
    margin-bottom: 0.4rem;
    font-family: 'Spoqa-Han-Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #1F1F1F;
`

const Toc = styled.div`
    display: inline;
    font-family: 'Jalnan';
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.1rem;
    color: ${props => props.color || 'black'};
`

const Button = styled.button`
    background-color:white;
    border:none;
    outline:none;
    text-align:left;

    width:100%;
    padding:0;
    margin-top:1.2rem;
    cursor:${props => props.type === 'dev' ? 'pointer' : ''};

    color: #A7A7A7;
    &:hover{
        color : ${props => props.type === 'dev' ? '#1F1F1F' : ''};
    }
`

const SubDesc = styled.div`
    font-family: 'Spoqa-Han-Sans';
    font-weight: 400;
    font-size: 1.2rem;
`

const ImgTag = styled.img`
`

function BoxComponent({ src, style, title, color, name, developer, subDesc, type, site }) {

    const goToSite = () => {
        (type === 'dev') && site && window.open(site);
    }

    return (
        <Container>
            <Wrapper type={type}>
                <Img><ImgTag src={src} style={style} /></Img>
                <TextWrapper>
                    <Desc>{title}</Desc>
                    <Toc color={color}>{name}</Toc>
                    <Toc>{developer}</Toc>
                    <Button type={type} onClick={goToSite}><SubDesc>{subDesc}</SubDesc></Button>
                </TextWrapper>
            </Wrapper>
        </Container>
    );
}

export default BoxComponent;