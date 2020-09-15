import React, { Component } from "react";
import styled from "styled-components";

const Item = (props) => {
  console.log(props);
  return <div>{props.name}</div>;
};

export default Item;
