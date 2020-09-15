import React, { Component } from "react";
import styled from "styled-components";

const Item = (props) => {
  console.log(props);
  return <div>{props.name}
    <img src={props.imageSrc} />
  </div>;
};

export default Item;
