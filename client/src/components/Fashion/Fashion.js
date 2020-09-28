import React from "react";
import styled from "styled-components";

const Fashion = ({ imgSrc }) => {
  return (
    <Container>
      <Image src={imgSrc} />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 75%;
`;

export default Fashion;
