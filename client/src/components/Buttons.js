
import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../components/Style/Theme';
import { useSelector } from "react-redux";
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export const Buttons = ({ children, onClick, id }) => {
    const isAddedToCart = useSelector((state) => state.purchase[id] ? state.purchase[id].isAddedToCart : false);
    return (
        <Button onClick={onClick} disabled={isAddedToCart}>
            {children}
        </Button >
    )
};

const Button = styled.button`
    min-width: 35px;
    border: none;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color: ${THEME.primary};
    font-size: 20px;
    border-radius: 50%;
    margin: 0 2px;

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

    &:disabled {
        background: ${THEME.tertiary};
        color: white;

        &:hover{
            box-shadow: none;
            cursor: auto;
        }
    }
`

export const BuyButton = ({ onClick, id }) => {
    const isAddedToCart = useSelector((state) => state.purchase[id] ? state.purchase[id].isAddedToCart : false);

    return (
        <ButtonAddToCart onClick={onClick} disabled={isAddedToCart}>
            <ShoppingCart /> {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
        </ButtonAddToCart>
    );
}

const ButtonAddToCart = styled.button`
    display: flex;
    align-items: center;
    min-width: 40px;
    border: none;
    box-sizing: border-box;
    text-transform: uppercase;
    color: ${THEME.black};
    background-color: ${THEME.secondary};
    border-radius: 25px;
    padding: 10px 30px;
    transition: background-color 500ms ease-in-out;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        background-color: #fcc46d;
        text-decoration: none;
    }

    &:active{
        box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
    }

    &:focus{
        outline: none;
    }

    &:disabled {
        background: ${THEME.tertiary};
        color: white;

        &:hover{
            box-shadow: none;
            cursor: auto;
        }
    }
`

export const ModalButton = ({ onClick, children }) => {
    return (
        <ButtonPurchase onClick={onClick}>
            {children}
        </ButtonPurchase>
    );
}

const ButtonPurchase = styled.button`
    display: flex;
    align-items: center;
    min-width: 40px;
    border: none;
    box-sizing: border-box;
    text-transform: uppercase;
    background-color: ${props => props.color};
    border-radius: 25px;
    padding: 10px 30px;
    margin: 10px 0 0 30px;
    transition: background-color 500ms ease-in-out;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        background-color: #fcc46d;
        text-decoration: none;
    }

    &:active{
        box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
    }

    &:focus{
        outline: none;
    }

    &:disabled {
        background: ${THEME.tertiary};
        color: white;

        &:hover{
            box-shadow: none;
            cursor: auto;
        }
    }
`