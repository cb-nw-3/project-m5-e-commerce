import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StoreLogo = ({ imgSrc }) => {
  return (
    <Link to={"/"}>
      <Image src={imgSrc} />
    </Link>
  );
};

const Image = styled.img`
  width: 150px;
  margin-left: 50px;
`;

export default StoreLogo;
