import React from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components/macro';
import { THEME } from '../Style/Theme';

export default function BuyButton({ onClick }) {
    return (
        <Button onClick={onClick}>
            <ShoppingCart /> Add to Cart
        </Button>
    );
}

const Button = styled.button`
    display: flex;
    align-items: center;
    min-width: 40px;
    border: none;
    box-sizing: border-box;
    text-transform: uppercase;
    color: ${THEME.black};
    background-color: ${THEME.secondary};
    border-radius: 5px;
    transition: background-color 500ms ease-in-out;
    font-weight: 600;

    &:hover{
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        background-color: ${THEME.tertiary};
        text-decoration: none;
        color: ${THEME.white};
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
