import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../Style/Theme';

const Company = ({ children, src }) => {

    return (
        <Wrapper >
            <Anchor href={src} target="_blank">
                {children}
            </Anchor>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    color: ${THEME.primary};
    margin: 5px 0;
`

const Anchor = styled.a`
    text-decoration: inherit;
    color: inherit;
`

export default Company;