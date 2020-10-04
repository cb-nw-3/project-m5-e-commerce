import React from "react";
import styled from "styled-components/macro";
import { THEME } from "../Style/Theme";

const Company = ({ children, src }) => {
  return (
    <Wrapper>
      <Anchor href={src} target="_blank">
        {children}
      </Anchor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${THEME.primary};
`;

const Anchor = styled.a`
  text-decoration: inherit;
  color: inherit;
  font-size: 12px;
  display: flex;
  font-weight: 600;
`;

export default Company;
