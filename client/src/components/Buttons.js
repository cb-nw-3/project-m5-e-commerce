
import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../components/Style/Theme'

const Buttons = ({ type, children, onClick }) => {
    // let ButtonsElem;
    // if (type === 'decrement') {
    //     ButtonsElem = RadiusLeft;
    // } else if (type === 'increment') {
    //     ButtonsElem = RadiusRight;
    // }

    return (
        <Button onClick={onClick} >
            {children}
        </Button >
    )
};

const Button = styled.button`
    min-width: 40px;
    border: none;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color: ${THEME.primary};
    font-size: 20px;
    color: ${THEME.black};
    border-radius: 50%;

    &:hover{
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        background-color: #d5d5d5;
        text-decoration: none;
    }

    &:active{
        box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
    }

    &:focus{
        outline: none;
    }
`

// const RadiusLeft = styled(Button)`
//     border-radius: 40px 0 0px 40px;
// `

// const RadiusRight = styled(Button)`
//     border-radius: 0 40px 40px 0;
// `

export default Buttons;