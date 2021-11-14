import React from 'react';
import styled from 'styled-components';

//type에 따라서 초록 버튼인지 회색 테두리 버튼인지 결정하게 수정하면 편함

const Button = styled.div`
    width: 29.2rem;
    height: 7rem;
    border-radius: 1.5rem;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.type === true ? '#00462A' : props.theme.white};
    cursor:pointer;
    margin : 1.5rem;
    display: inline-flex;
    font-family:'Jalnan';
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight: 400;
    font-size:2.0rem;
    text-align:center;
    border:none;
`

function StartButtonComponent({ idx, type, text, onclick }) {

    const onClickBtn = () => {
        onclick(idx);
    }

    return (
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );

}

export default StartButtonComponent;