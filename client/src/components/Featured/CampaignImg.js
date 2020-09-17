import React, { Component } from "react";
import styled from "styled-components";

const CampaignImg = ({ imgSrc, position, text }) => {
  let imageText = <div></div>;
  if (position === "bottom") {
    imageText = <Bottom>{text}</Bottom>;
  } else if (position === "top") {
    imageText = <Top>{text}</Top>;
  }
  return (
    // This is temporary filler
    <Container>
      <Image src={imgSrc} />
      {imageText}
    </Container>
  );
};

export default CampaignImg;

const Image = styled.img`
  width: 100%;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  right: 10px;
`;

const Top = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
`;

const Container = styled.div`
  position: relative;
  text-align: right;
  color: white;
  font-size: 50px;
  font-family: "Nanum Gothic", sans-serif;
`;
