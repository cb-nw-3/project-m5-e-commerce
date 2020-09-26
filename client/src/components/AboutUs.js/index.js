import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreLogo from "../Header/StoreLogo";

const logo2 = require("../assets/bagel.gif");
const alex = require("../assets/alex.jpg");
const alexandre = require("../assets/alexandre.jpg");
const nathalie = require("../assets/nathalie.jpg");
const hiba = require("../assets/hiba.jpg");
const approval = require("../assets/approval.jpg");
const teamwork = require("../assets/teamwork.jpg");

const AboutUs = () => {
  const { AboutUs } = useParams();
  return (
    <>
      <Wrapper>
        <StoreLogo imgSrc={logo2} />

        <h1>Why Baglez</h1>
        <MainText>
          Bagelz wearables circle us physically but also virtually as they
          encircle many realms of our lives ...wether for business or pleasure,
          for individual growth or to connect with others we will find that
          wearables come in use full circle as they accompany us from day to
          night. Their utility but also their playfulness does not escape
          us...thus our encircling bagel logo also happens to represent the
          teams initials.
        </MainText>
        <PageBody>
          <HoldingWrapper>
            <LineWrapper>
              <BigLetter>B</BigLetter>
              <TextWrapper>
                <Uppertext>
                  The <PurpleText>b</PurpleText> comes with the{" "}
                  <PurpleText>BLESSING</PurpleText> <br />
                  of nathalie <PurpleText>B</PurpleText>enaroch
                </Uppertext>
                <LowerText>
                  Having led the Creative Direction of lifestyle and fashion
                  brands, Benarroch decided to go see the other side of the
                  rabbit hole and discovered the world of web development thus
                  giving full expression to the power of the chosen word and
                  impactful images through the Web.
                </LowerText>
              </TextWrapper>
            </LineWrapper>
            <Color src={nathalie}></Color>
          </HoldingWrapper>

          <HoldingWrapper>
            <LineWrapper>
              <BigLetter>A</BigLetter>
              <TextWrapper>
                <Uppertext>
                  The <PurpleText>a</PurpleText> comes with the{" "}
                  <PurpleText>APPROVAL</PurpleText> <br />
                  of <PurpleText>A</PurpleText>lex and{" "}
                  <PurpleText>A</PurpleText>
                  lexander
                </Uppertext>
                <LowerText>
                  Maintaining the volume of approvals and permissions issued by
                  these bureaucrats was one way of ensuring compliance between
                  different bureaucratic interests for reducing expenditures.
                </LowerText>
              </TextWrapper>
            </LineWrapper>
            <Color src={approval}></Color>
          </HoldingWrapper>

          <HoldingWrapper>
            <LineWrapper>
              <BigLetter>G</BigLetter>
              <TextWrapper>
                <Uppertext>
                  The <PurpleText>g</PurpleText> comes from the{" "}
                  <PurpleText>
                    GREAT <br /> CONTRIBUTION
                  </PurpleText>{" "}
                  of Alexander <PurpleText>G</PurpleText>
                  agnon lalonde
                </Uppertext>
                <LowerText>
                  “If you always put limit on everything you do, physical or
                  anything else, it will spread into your work and into your
                  life. There are no limits. There are only plateaus, and you
                  must not stay there, you must go beyond them.”
                  <br />
                  <br />
                  "Bruce Lee"
                </LowerText>
              </TextWrapper>
            </LineWrapper>
            <Color src={alexandre}></Color>
          </HoldingWrapper>

          <HoldingWrapper>
            <LineWrapper>
              <BigLetter>E</BigLetter>
              <TextWrapper>
                <Uppertext>
                  The <PurpleText>e</PurpleText> comes from the{" "}
                  <PurpleText>ENERGY</PurpleText>and
                  <br />
                  <PurpleText>ENTHUSIASM</PurpleText> of the team
                </Uppertext>
                <LowerText>
                  Teamwork is the ability to work <strong>TOGETHER</strong>{" "}
                  toward a common vision. the ability to direct{" "}
                  <strong>INDIVIDUAL</strong> accomplishments toward
                  organizational objectives. it is the <strong>FUEL</strong>{" "}
                  that allows common people to attain uncommon results.
                  <br />
                  <br />
                  "Andrew Carnegie"
                </LowerText>
              </TextWrapper>
            </LineWrapper>
            <Color src={teamwork}></Color>
          </HoldingWrapper>

          <HoldingWrapper>
            <LineWrapper>
              <BigLetter>L</BigLetter>
              <TextWrapper>
                <Uppertext>
                  The <PurpleText>l</PurpleText> comes from the{" "}
                  <PurpleText>LAUDABLE CONTRIBUTION</PurpleText>
                  of Alex <PurpleText>L</PurpleText>angevin
                </Uppertext>
                <LowerText>
                  “Life is never made unbearable by circumstances, but only by
                  lack of meaning and purpose.”
                  <br />
                  <br />
                  "Viktor Frankl"
                </LowerText>
              </TextWrapper>
            </LineWrapper>
            <Color src={alex}></Color>
          </HoldingWrapper>

          <HoldingWrapper>
            <LineWrapper>
              <BigLetter>Z</BigLetter>
              <TextWrapper>
                <Uppertext>
                  The <PurpleText>z</PurpleText> comes from the{" "}
                  <PurpleText>ZEALOUS CONTRIBUTION</PurpleText>
                  of Hiba <PurpleText>Z</PurpleText>aarour
                </Uppertext>
                <LowerText>
                  “Never underestimate the power of dreams and the influence of
                  the human spirit. We are all the same in this notion: The
                  potential for greatness lives within each of us.”
                  <br />
                  <br />
                  "Wilma Rudolph"
                </LowerText>
              </TextWrapper>
            </LineWrapper>
            <Color src={hiba}></Color>
          </HoldingWrapper>
        </PageBody>
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

const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  margin-bottom: 10px;
  border: 10px;
`;

const HoldingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LineWrapper = styled.div`
  display: flex;
  background-color: white;
  width: 500px;
  border: 10px;
  padding: 50px;
  margin: 20px;
`;

const BigLetter = styled.div`
  font-size: 40px;
  color: purple;
  padding: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.p`
  text-align: justify;
  text-justify: inter-word;
  border: 20px;
  font-size: 23px;
  font-style: times, arial;
`;

const Uppertext = styled.p`
  /* text-align: justify; */
  text-justify: inter-word;
  border: 20px;
  font-size: 21px;
  font-style: arial;
`;

const LowerText = styled.p`
  text-align: justify;
  text-justify: inter-word;
  border: 20px;
  font-size: 18px;
  font-style: arial;
`;

const PurpleText = styled.span`
  color: purple;
`;

const Color = styled.img`
  height: 150px;
  width: 150px;
`;

export default AboutUs;
