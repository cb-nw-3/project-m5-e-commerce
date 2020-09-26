import React from "react";
import styled from "styled-components";
import DropdownMenu from './DropdownMenu';

const SearchInputs = () => {

  return (
    <DropdownContainer>
      <DropdownMenu 
        title="Shop By Body Part"
        menuOptions= {['All','Head','Hands', 'Wrist', 'Arms','Chest','Torso', 'Waist', 'Feet']}
      />

      <DropdownMenu 
        title="Sort By"
        menuOptions= {['A ↑', 'Z ↓', '$ ↑', '$$$ ↓']}
        />
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
`

export default SearchInputs;