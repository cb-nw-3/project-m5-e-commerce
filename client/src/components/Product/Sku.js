import React from "react";
import styled from "styled-components/macro";
import { THEME } from "../Style/Theme";

const Sku = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  color: ${THEME.primary};
  font-size: 12px;
  margin: 0;
  display: flex;
  align-items: center;
`;

export default Sku;
