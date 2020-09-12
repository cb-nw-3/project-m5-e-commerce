import React from 'react';
import styled from "styled-components/macro";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Actions';
import Buttons from '../Buttons';


const QuantityBar = () => {
    const counter = useSelector(state => state.counter.numberOfItems);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Buttons type="decrem" onClick={() => dispatch(decrement())}>
                -
            </Buttons>
            { counter}
            <Buttons type="increm" onClick={() => dispatch(increment())} size="small" variant="contained">
                +
            </Buttons>
        </Wrapper >
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export default QuantityBar;
