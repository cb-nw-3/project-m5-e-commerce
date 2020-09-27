import React from "react";
import styled from "styled-components";
import Fashion from "./Fashion";
import { Link } from "react-router-dom";

const gif = require("../assets/new.gif");

const Fashionspace = () => {
  return (
    <Wrapper to={"/"}>
      <Fashion imgSrc={gif} />
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
`;

export default Fashionspace;
