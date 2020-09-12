
import React from 'react';
import styled from 'styled-components/macro';

const Buttons = ({ type, children }) => {
    let ButtonsElem;
    if (type === 'decrem') {
        ButtonsElem = RadiusLeft;
    } else if (type === 'increm') {
        ButtonsElem = RadiusRight;
    }

    return (
        <ButtonsElem>
            {children}
        </ButtonsElem>
    )
};

const Button = styled.button`
    min-width: 40px;
    border: none;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color: #e0e0e0;

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

const RadiusLeft = styled(Button)`
    border-radius: 40px 0 0px 40px;
`

const RadiusRight = styled(Button)`
    border-radius: 0 40px 40px 0;
`

export default Buttons;