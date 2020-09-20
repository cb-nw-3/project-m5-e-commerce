import React from "react";
import styled from "styled-components";
import DropdownMenu from './DropdownMenu';

const SearchInputs = () => {

  return (
    <>
      <DropdownMenu 
        title="Shop By Body Part"
        menuOptions= {['Head','Hands', 'Wrist', 'Arms','Chest',, 'Torso', 'Waist', 'Feet']}
      />

      <DropdownMenu 
        title="Sort By"
        menuOptions= {['Alphabetically (A to Z)', 'Alphabetically (Z to A)', 'Price ($ to $$$)', 'Price ($$$ to $)']}
        />
    </>
  );
};

export default SearchInputs;