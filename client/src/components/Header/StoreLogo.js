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
  width: 160px;
  padding-left: 400px;
`;
const Container = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export default StoreLogo;
