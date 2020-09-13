import React, { Component } from "react";
import styled from "styled-components";

import CampaignImg from "./CampaignImg";
import TextBox from "./Textbox";

const Shopping = () => {
  return (
    <Wrapper>
      <CampaignImg />
      <TextBox />
      <CampaignImg />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* Temporary styles */
  border: solid 2pt purple;
  min-height: 50vh;
  width: 33%;
`;

export default Shopping;