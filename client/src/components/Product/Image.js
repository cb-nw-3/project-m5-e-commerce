import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../Style/Theme';

export const Image = ({ itemSrc }) => {
    return (
        <Wrapper>
            <ItemImage src={itemSrc} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
    width: 50%;
    padding: 40px 0;
    border: 5px double ${THEME.primary};
`

const ItemImage = styled.img`
    min-width: 200px;
    width: 50%;
    height: auto;
`

export default Image;