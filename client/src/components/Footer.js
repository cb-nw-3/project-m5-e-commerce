import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

function Footer() {
  return (
    <FooterWrapper>
      <Pagination />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  height: 25vh;
  width: 100vw;
`;

export default Footer;
