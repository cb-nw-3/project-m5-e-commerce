import React, { Component } from "react";
import styled from "styled-components";
import Fashion from "./Fashion";
import Header from "../Header/index";

const gif = require("../assets/new.gif");


const Fashionspace = () => {
    return (
        <Wrapper>
            <Header/>
  <Fashion imgSrc={gif}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  `;

const Container = styled.div`
position: relative;
text-align: right;
color: white;
font-size: 50px;
font-family: "Montserrat", sans-serif;
`;

export default Fashionspace;