import React, { Component } from "react";
import styled from "styled-components";

import CampaignImg from "./CampaignImg";
import TextBox from "./Textbox";
const image1 = require("../assets/image1.jpg");
const image2 = require("../assets/image2.jpg");
const image3 = require("../assets/image3.jpg");
const image4 = require("../assets/image4.jpg");
const image5 = require("../assets/image5.jpg");

const Featured = () => {
  return (
    <Wrapper>
      <CampaignImg
        imgSrc={image1}
        text={"Technology =>  return (Freedom)"}
        position="bottom"
      />
      <CampaignImg
        imgSrc={image2}
        text={"Technology =>  return (Love)"}
        position="bottom"
      />
      <CampaignImg
        imgSrc={image3}
        text={"Technology =>  return (Power)"}
        position="top"
      />
      <CampaignImg
        imgSrc={image4}
        text={"Technology =>  return (Speed)"}
        position="top"
      />
      <CampaignImg
        imgSrc={image5}
        text={"Technology =>  return (Connection)"}
        position="top"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* Temporary styles */
  /* border: solid 2pt purple; */
  min-height: 50vh;
  width: 33%;
`;

export default Featured;
