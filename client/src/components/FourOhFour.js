import React from "react";
import styled from "styled-components";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <>
      <PageContainer>
        <div style={{ transform: "translateY(-100%)" }}>
          <ErrorTitle>
            Sorry, something went wrong! <BiError />
          </ErrorTitle>
          <ErrorSubtitle>
            Click <StyledLink to="/">here</StyledLink> to return home or try
            refreshing the page.
          </ErrorSubtitle>
        </div>
      </PageContainer>
    </>
  );
};

export default FourOhFour;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fffefc;
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

const ErrorTitle = styled.h1`
  color: #e16259;
`;

const ErrorSubtitle = styled.h3`
  color: black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e16259; ;
`;
