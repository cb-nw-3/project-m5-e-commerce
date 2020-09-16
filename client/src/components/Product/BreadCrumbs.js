import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components/macro';
import { THEME } from '../Style/Theme';

const BreadCrumbs = ({ children }) => {
    return (
        <Wrapper>
            <Breadcrumb>
                <Span>
                    <Anchor href="/">
                        <HomeIcon />
                    </Anchor>
                </Span>
                /
                <Span>
                    ALL PRODUCTS
                </Span>
                /
            </Breadcrumb>
            <Span>
                {children}
            </Span>
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
    padding: 0 10px;
    &:first-child{
        padding: 0 10px 0 0;
    }
`

const Breadcrumb = styled.div`
    color: ${THEME.primary};
    display: flex;
    align-items: center;
`

export default BreadCrumbs;