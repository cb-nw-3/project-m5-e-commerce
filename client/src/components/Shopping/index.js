import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";

import Item from "./Item";

const Shopping = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/items")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Wrapper>{data ? data.map((item) => <Item {...item} />) : null}</Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* Temporary styles */
  border: solid 2pt green;
  min-height: 50vh;
  width: 33%;
`;

export default Shopping;
