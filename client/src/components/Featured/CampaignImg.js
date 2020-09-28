import React from "react";
import styled from "styled-components";

const CampaignImg = ({ imgSrc, position, children }) => {
  let imageText = <div></div>;
  if (position === "bottom") {
    imageText = <Bottom>{children}</Bottom>;
  } else if (position === "top") {
    imageText = <Top>{children}</Top>;
  }
  return (
    <Container>
      <Image src={imgSrc} />
      {imageText}
    </Container>
  );
};

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  margin: 5px 5px 0 5px;
`;
const Bottom = styled.div`
  position: absolute;
  bottom: 40px;
  right: 10px;
`;
const Top = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Container = styled.div`
  position: relative;
  text-align: right;
  color: white;
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
`;

export default CampaignImg;
