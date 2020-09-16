import React from "react";
import styled from "styled-components";

const StoreLogo = ({ imgSrc }) => {
  return (
    <>
      <Container>
        <Image src={imgSrc} />
      </Container>
    </>
  );
};

const Image = styled.img`
  padding-bottom: 30px;
  width: 220px;
`;
const Container = styled.div`
  /* position: relative;
  text-align: right; */
`;

export default StoreLogo;
