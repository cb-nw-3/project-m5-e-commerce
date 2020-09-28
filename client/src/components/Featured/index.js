import React from "react";
import styled from "styled-components";

import CampaignImg from "./CampaignImg";

const image1 = require("../assets/image1.jpg");
const image2 = require("../assets/image2.jpg");
const image3 = require("../assets/image3.jpg");
const image4 = require("../assets/image4.jpg");
const image5 = require("../assets/image5.jpg");
const image6 = require("../assets/image6.jpg");

const Featured = () => {
  return (
    <Wrapper>
      <CampaignImg imgSrc={image1} position="top">
        <Text>
          Bagelz give you the <TextStrong>Freedom,</TextStrong>
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
          give you the <TextStrongOrange>Power,</TextStrongOrange>
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
          so you can <TextStrongMint>Connect,</TextStrongMint>
        </Text>
      </CampaignImg>
      <CampaignImg imgSrc={image6} position="top">
        {" "}
        <Text>
          whenever <TextStrongMauve>You</TextStrongMauve>
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
  flex: 2;
`;
const TextStrong = styled.span`
  font-weight: bold;
  color: black;
  font-family: "Montserrat", sans-serif;
`;
const TextStrongRed = styled.span`
  font-weight: bold;
  color: #f992fd;
  font-family: "Montserrat", sans-serif;
`;
const TextStrongMauve = styled.span`
  font-weight: bold;
  color: #a181f5;
  font-family: "Montserrat", sans-serif;
`;
const TextStrongOrange = styled.span`
  font-weight: bold;
  color: #ff882e;
  font-family: "Montserrat", sans-serif;
`;
const TextStrongMint = styled.span`
  font-weight: bold;
  color: #bde5c2;
  font-family: "Montserrat", sans-serif;
`;
const Text = styled.span`
  font-weight: light;
  /* font-family: "Montserrat", sans-serif; */
  font-family: "Montserrat", sans-serif;
`;

export default Featured;
