import React, { Component } from "react";
import styled from "styled-components";


const Fashion= ({imgSrc}) => {
return (
    <Container>
    <Image src={imgSrc} />
  </Container>

);
};

export default Fashion;

const Container = styled.div`
  position: relative;
  text-align: right;
  color: white;
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;