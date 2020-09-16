import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../Style/Theme';

const Sku = ({ children }) => {

    return (
        <Wrapper >
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    color: ${THEME.primary};
    font-size: 12px;
    margin: 5px 0;
`

export default Sku;