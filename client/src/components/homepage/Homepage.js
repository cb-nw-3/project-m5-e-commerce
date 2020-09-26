import React from "react";
import styled from "styled-components";
import { Feed } from "./Feed";
import { COLORS } from "../styles/Colors";
import Pagination from "./Pagination";

const Homepage = () => {
  return (
    <Wrapper>
      <FeedWrapper>
        <Feed />
      </FeedWrapper>

      <LineBreak></LineBreak>
      <Pagination />
    </Wrapper>
  );
};

const LineBreak = styled.div`
  border-top: 1px dashed ${COLORS.BLUE.PRIMARY};
  width: 75%;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeedWrapper = styled.div`
  display: flex;
  list-style-type: none;
  width: 75%;
  text-align: center;
  margin-top: 15px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (min-width: 800px) {
    flex-wrap: no-wrap;
  }
`;

export default Homepage;
