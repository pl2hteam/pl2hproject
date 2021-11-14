import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    width: ${props =>
        props.type === 'result-activated' ? '28.8rem'
            : props.type === 'result-unactivated' ? '28.2rem'
                : props.type === 'others-activated' ? '32.7rem'
                    : '32.15rem'
    };
    
    height: ${props =>
        props.type === 'result-activated' ? '4.6rem'
            : props.type === 'others-activated' ? '4.6rem'
                : '4rem'
    };
    border-radius: 0.5rem;

    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;

    font-family:'Jalnan';
    font-weight: 400;
    font-size:1.6rem;
    text-align:center;

    margin-bottom:1.2rem;

    background-color: ${props =>
        props.type === 'result-activated' ? '#00462A'
            : props.type === 'others-activated' ? '#00462A'
                : 'white'};
    color: ${props =>
        props.type === 'result-activated' ? 'white'
            : props.type === 'others-activated' ? 'white'
                : 'black'};
    border:${props =>
        props.type === 'result-activated' ? 'none'
            : props.type === 'others-activated' ? 'none'
                : '0.3rem solid #E5E5E5'};
`

function SYBtnComponent({ type, text }) {

    return (
        <Button type={type}>{text}</Button>
    );

}

export default SYBtnComponent;