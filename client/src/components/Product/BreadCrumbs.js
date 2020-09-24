import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import styled from "styled-components/macro";
import { THEME } from "../Style/Theme";

const BreadCrumbs = ({ device, children }) => {
  return (
    <Wrapper device={device}>
      <Breadcrumb>
        <Span>
          <Anchor href="/">
            <StyledHomeIcon />
          </Anchor>
        </Span>
        |<Span>ALL PRODUCTS</Span>|
      </Breadcrumb>
      <Span>{children}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ device }) =>
    device === "desktop"
      ? `@media (max-width:${THEME.mobile}){ display: none;}`
      : `@media (min-width:${THEME.mobile}){ display: none;}`};
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 10px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 0;
  padding: 0;
`;

const Span = styled.span`
  padding: 0 10px;
  &:first-child {
    padding: 0 10px 0 0;
  }
`;

const Breadcrumb = styled.div`
  color: ${THEME.primary};
  display: flex;
  align-items: center;
`;

const StyledHomeIcon = styled(HomeIcon)`
  width: 18px !important;
  height: 18px !important;
  display: flex !important;
`;

export default BreadCrumbs;
