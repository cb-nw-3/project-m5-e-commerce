import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components/macro';
import { THEME } from '../Style/Theme';

const BreadCrumbs = ({ children }) => {
    return (
        <Wrapper>
            <Span>
                <Anchor href="/">
                    <HomeIcon />
                </Anchor>
                /
                ALL PRODUCTS
                /
            </Span>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
`

const Span = styled.span`
    color: ${THEME.primary};
    display: flex;
    align-items: center;
`

export default BreadCrumbs;