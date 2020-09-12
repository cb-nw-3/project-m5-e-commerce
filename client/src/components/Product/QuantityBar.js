import React from 'react';
import styled from "styled-components/macro";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Actions';
import Buttons from '../Buttons';
import { THEME } from '../Style/Theme';


const QuantityBar = () => {
    const counter = useSelector(state => state.counter.numberOfItems);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Buttons type="decrement" onClick={() => dispatch(decrement())}>
                -
            </Buttons>
            <Span>{counter} </Span>
            <Buttons type="increment" onClick={() => dispatch(increment())}>
                +
            </Buttons>
        </Wrapper >
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Span = styled.span`
    text-align: center;
    width: 50px;
    padding: 0 20px;
    background: ${THEME.white};
    font-size: 18px;
`

export default QuantityBar;
