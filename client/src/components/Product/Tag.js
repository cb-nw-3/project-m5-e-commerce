import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../Style/Theme';

const Tag = ({ children }) => {

    return (
        <Wrapper>
            <Paragraph>
                {children}
            </Paragraph>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inherit;

`

const Paragraph = styled.p`
    background: ${THEME.primary};
    width: auto;
    padding: 5px 10px;
    border-radius: 40px;
    color: ${THEME.white};
    font-size: 14px;
`
export default Tag;