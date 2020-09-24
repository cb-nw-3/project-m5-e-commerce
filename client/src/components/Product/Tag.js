import React from "react";
import styled from "styled-components/macro";
import { THEME } from "../Style/Theme";

const Tag = ({ children }) => {
  return (
    <Wrapper>
      <Paragraph>{children}</Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Paragraph = styled.p`
  background: ${THEME.primary};
  padding: 0px 10px;
  border-radius: 5px;
  color: ${THEME.white};
  font-size: 12px;
  margin-bottom: 10px;
  max-width: 105px;
`;
export default Tag;
