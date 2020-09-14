import React from "react";
import styled from "styled-components";

import Header from "../Header/index";
import Featured from "../Featured/index";
import Shopping from "../Shopping/index";
import Cart from "../Cart/index";

const HomePage = () => {
  return (
    <GlobalContainer>
      <Header />
      <ContentContainer>
        <Featured />
        <Shopping />
        <Cart />
      </ContentContainer>
    </GlobalContainer>
  );
};

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  display: flex;
`;

export default HomePage;
