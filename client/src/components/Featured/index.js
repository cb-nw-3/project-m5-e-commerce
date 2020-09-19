import React, { Component } from "react";
import styled from "styled-components";

import CampaignImg from "./CampaignImg";
import TextBox from "./Textbox";
const image1 = require("../assets/image1.jpg");
const image2 = require("../assets/image2.jpg");
const image3 = require("../assets/image3.jpg");
const image4 = require("../assets/image4.jpg");
const image5 = require("../assets/image5.jpg");
const image6 = require("../assets/image6.jpg");

const Featured = () => {
  return (
    <Wrapper>
      <CampaignImg imgSrc={image1} position="bottom">
        <Text>
          The Wearables give you the <TextStrong>Freedom,</TextStrong>
        </Text>
      </CampaignImg>
      <CampaignImg imgSrc={image2} position="top">
        {" "}
        <Text>
          let you share the <TextStrongRed>Love,</TextStrongRed>
        </Text>
      </CampaignImg>
      <CampaignImg imgSrc={image3} position="top">
        <Text>
          give you the <TextStrong>Power,</TextStrong>
        </Text>
      </CampaignImg>
      <CampaignImg imgSrc={image4} position="top">
        <Text>
          the ability to stay up to <TextStrong>Speed,</TextStrong>
        </Text>
      </CampaignImg>
      <CampaignImg imgSrc={image5} position="top">
        {" "}
        <Text>
          so you can <TextStrong>Connect,</TextStrong>
        </Text>
      </CampaignImg>
      <CampaignImg imgSrc={image6} position="top">
        {" "}
        <Text>
          whenever <TextStrong>You</TextStrong>
          <Text> want.</Text>
        </Text>
      </CampaignImg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  width: 33%;
`;

const TextStrong = styled.span`
  font-weight: bold;
  color: black;
  font-family: "Source Serif Pro", serif;
`;
const TextStrongRed = styled.span`
  font-weight: bold;
  color: red;
  font-family: "Source Serif Pro", serif;
`;
const Text = styled.span`
  font-weight: light;
  font-family: "Source Serif Pro", serif;
`;
export default Featured;
