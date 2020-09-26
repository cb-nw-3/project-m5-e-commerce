import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreLogo from "./StoreLogo";

const logo2 = require("../assets/logo2.jpg");

const AboutUs = () => {
  const { AboutUs } = useParams();
  return (
    <>
      <Wrapper>
        <StoreLogo imgSrc={logo2} />

        <h2>Why Baglez</h2>
        <LowerText>
          Bagelz wearables circle us physically but also virtually as they
          encircle many realms of our lives ...wether for business or pleasure,
          for individual growth or to connect with others we will find that
          wearables come in use full circle as they accompany us from day to
          night. Their utility but also their playfulness does not escape
          us...thus our encircling bagel logo also happens to represent the
          teams initials.
        </LowerText>
        <LineWrapper>
          <BigLetter>B</BigLetter>
          <TextWrapper>
            <Uppertext>
              The <PurpleText>b</PurpleText> comes with the{" "}
              <PurpleText>BLESSING</PurpleText> <br />
              of nathalie <PurpleText>B</PurpleText>enaroch
            </Uppertext>
            <LowerText>
              Having led the Creative Direction of lifestyle and fashion brands,
              Benarroch decided to go see the other side of the rabbit hole and
              discovered the world of web development thus giving full
              expression to the power of the chosen word and impactful images
              through the Web.
            </LowerText>
          </TextWrapper>
          <Color></Color>
        </LineWrapper>
        <br />
        <br />
        <LineWrapper>
          <BigLetter>A</BigLetter>
          <TextWrapper>
            <Uppertext>
              The <PurpleText>a</PurpleText> comes with the{" "}
              <PurpleText>APPROVAL</PurpleText> <br />
              of<PurpleText>A</PurpleText>lex and <PurpleText>A</PurpleText>
              lexander ... more below
            </Uppertext>
            <LowerText>a lot of new text here</LowerText>
          </TextWrapper>
          <Color></Color>
        </LineWrapper>
        <br />
        <br />
        <LineWrapper>
          <BigLetter>B</BigLetter>
          <TextWrapper>
            <Uppertext>
              The <PurpleText>b</PurpleText> comes with the{" "}
              <PurpleText>BLESSING</PurpleText> <br />
              of nathalie <PurpleText>B</PurpleText>enaroch
            </Uppertext>
            <LowerText>a lot of new text here</LowerText>
          </TextWrapper>
          <Color></Color>
        </LineWrapper>
        <br />
        <br />
        <LineWrapper>
          <BigLetter>B</BigLetter>
          <TextWrapper>
            <Uppertext>
              The <PurpleText>b</PurpleText> comes with the{" "}
              <PurpleText>BLESSING</PurpleText> <br />
              of nathalie <PurpleText>B</PurpleText>enaroch
            </Uppertext>
            <LowerText>a lot of new text here</LowerText>
          </TextWrapper>
          <Color></Color>
        </LineWrapper>
        <br />
        <br />
        <LineWrapper>
          <BigLetter>B</BigLetter>
          <TextWrapper>
            <Uppertext>
              The <PurpleText>b</PurpleText> comes with the{" "}
              <PurpleText>BLESSING</PurpleText> <br />
              of nathalie <PurpleText>B</PurpleText>enaroch
            </Uppertext>
            <LowerText>a lot of new text here</LowerText>
          </TextWrapper>
          <Color></Color>
        </LineWrapper>
        <br />
        <br />
        <LineWrapper>
          <BigLetter>B</BigLetter>
          <TextWrapper>
            <Uppertext>
              The <PurpleText>b</PurpleText> comes with the{" "}
              <PurpleText>BLESSING</PurpleText> <br />
              of nathalie <PurpleText>B</PurpleText>enaroch
            </Uppertext>
            <LowerText>a lot of new text here</LowerText>
          </TextWrapper>
          <Color></Color>
        </LineWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  background-color: white;
`;

const LineWrapper = styled.div`
  display: flex;
`;

const BigLetter = styled.div`
  font-size: 40px;
  color: purple;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Uppertext = styled.p``;

const LowerText = styled.p`
  text-align: justify;
  text-justify: inter-word;
  border: 20px;
`;

const PurpleText = styled.span`
  color: purple;
`;

const Color = styled.span`
  height: 40px;
  width: 40px;
  background-color: purple;
`;

export default AboutUs;
