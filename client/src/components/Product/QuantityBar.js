import React from 'react';
import styled from "styled-components/macro";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Actions';
import { Buttons } from '../Buttons';
import { THEME } from '../Style/Theme';


const QuantityBar = () => {
    const counter = useSelector(state => state.counter.numberOfItems);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Text>
                Quantity:
            </Text>
            <Buttons onClick={() => dispatch(decrement())}>
                -
            </Buttons>
            <Span>{counter} </Span>
            <Buttons onClick={() => dispatch(increment())}>
                +
            </Buttons>
        </Wrapper >
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.span`
    margin-right: 10px;
    font-size: 14px;
`

const Span = styled.span`
    text-align: center;
    width: 50px;
    background: ${THEME.white};
    font-size: 18px;
`

export default QuantityBar;
