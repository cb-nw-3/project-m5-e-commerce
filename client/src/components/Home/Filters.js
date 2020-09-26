import React, { useState } from "react";
import styled from "styled-components";
import { THEME } from "../Style/Theme";

const Filter = () => {
  const [price, setPrice] = useState(2000);

  return (
    <Wrapper>
      <InputWrapper>
        <Input type="text" placeholder="Name" />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" placeholder="Location" />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" placeholder="Company" />
      </InputWrapper>
      <InputWrapper>
        <Label>Price</Label>
        <Input
          type="range"
          min="0"
          max="2000"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <Label>${price}</Label>
      </InputWrapper>
      <InputWrapper>
        <Select>
          <option value="Max" selected>
            Max
          </option>
          <option value="Min">Min</option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <FilterBtn>Apply</FilterBtn>
        <FilterBtn>Clear</FilterBtn>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const InputWrapper = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
`;

const FilterBtn = styled.button`
  border: none;
  box-sizing: border-box;
  transition: all 20ms ease-in 0s;
  box-shadow: rgba(252, 176, 59, 0.1) 0px 0px 2rem;
  background-color: #fbb03b;
  border-radius: 4px;
  padding: 8px 10px;
  margin: 2px;
  cursor: pointer;

  &:hover {
    background-color: #d5d5d5;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: rgba(252, 176, 59, 0.1) 0px 0px 1rem;
  }

  &:focus {
    outline: none;
  }
`;

const Label = styled.span`
  margin-right: 4px;
  min-width: 55px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #aaa;
  padding: 8px 4px;
  cursor: pointer;

  &:focus {
    outline-color: #45abff;
  }
`;

const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #aaa;
  padding: 8px 4px;
  cursor: pointer;

  &:focus {
    outline-color: #45abff;
  }
`;

export default Filter;
