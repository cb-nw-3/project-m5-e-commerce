import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// This is a temporary template of the page

  // Test function for the endpoints (will be erased at some point...)
  // const [bacon, setBacon] = useState(null);
  // useEffect(() => {
  //   fetch('/bacon')
  //     .then(res => res.json())
  //     .then(data => setBacon(data));
  // }, []);
  // return <div>{bacon ? bacon : `...where's my stuff?...`}</div>;

function App() {
  return(
  <>
    <Header/>
    <Body>
      <Campaign />
      <Shopping />
      <ShoppingBag />
    </Body>
  </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: row;

  /* Temporary styles */
  border: solid 2pt red;
  height: 20vh;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;

  /* Temporary styles */
  border: solid 2pt black;
  min-height: 50vh;
`

const Campaign = styled.div`
  display: flex;
  flex-direction: column;

  /* Temporary styles */
  border: solid 2pt purple;
  min-height: 50vh;
  width: 33%;
`

const Shopping = styled.div`
  display: flex;
  flex-direction: column;

  /* Temporary styles */
  border: solid 2pt green;
  min-height: 50vh;
  width: 33%;
`

const ShoppingBag = styled.div`
  display: flex;
  flex-direction: column;

  /* Temporary styles */
  border: solid 2pt yellow;
  min-height: 50vh;
  width: 33%;
`

export default App;
