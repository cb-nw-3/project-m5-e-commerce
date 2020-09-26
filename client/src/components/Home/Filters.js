import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { BuildFiltertUrl } from "../../Helper/UrlBuilder";
import {
  getFilterInfo,
  setPrice,
  setLocation,
  setName,
  setCompany,
  setLimit,
  applyFilter,
} from "../../Actions";

const Filter = () => {
  const category = useSelector((state) => state.itemList.category);
  const filterInfos = useSelector((state) => state.itemList.filterInfos);
  const filters = useSelector((state) => state.itemList.filters);
  const dispatch = useDispatch();

  const fetchFilterInfo = async () => {
    const data = await fetch("http://localhost:4000/api/filterinfo");

    if (data.ok) {
      const info = await data.json();
      dispatch(getFilterInfo(info));
    }
  };

  const onApplyFilter = async () => {
    const filterUrl = BuildFiltertUrl(filters, category);
    console.log(filterUrl);
    const data = await fetch(filterUrl);
    if (data.ok) {
      const items = await data.json();
      console.log(items);
    }
  };

  useEffect(() => {
    fetchFilterInfo();
  }, []);

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            dispatch(setName(event.target.value));
          }}
          defaultValue={filters.name}
        />
      </InputWrapper>
      <InputWrapper>
        <Select
          onChange={(event) => {
            dispatch(setLocation(event.target.value));
          }}
          defaultValue={filters.location}
        >
          <option value={""}>Location</option>
          {filterInfos &&
            filterInfos.locations.map((loc) => {
              return (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              );
            })}
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Select
          onChange={(event) => {
            dispatch(setCompany(event.target.value));
          }}
          defaultValue={filters.company}
        >
          <option value={""}>Company</option>
          {filterInfos &&
            filterInfos.companies.map((com) => {
              return (
                <option key={com} value={com}>
                  {com}
                </option>
              );
            })}
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Label>Price</Label>
        <Input
          type="range"
          min="0"
          max="2000"
          defaultValue={filters.price}
          onChange={(event) => {
            dispatch(setPrice(event.target.value));
          }}
        />
        <Label>${filters.price}</Label>
      </InputWrapper>
      <InputWrapper>
        <Select
          onChange={(event) => {
            dispatch(setLimit(event.target.value));
          }}
          defaultValue={filters.limit}
        >
          {filterInfos &&
            filterInfos.limits.map((limit) => {
              return (
                <option key={limit} value={limit}>
                  {limit.toUpperCase()}
                </option>
              );
            })}
        </Select>
      </InputWrapper>
      <InputWrapper>
        <FilterBtn
          onClick={() => {
            onApplyFilter();
          }}
        >
          Apply
        </FilterBtn>
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
  max-height: 100;

  &:focus {
    outline-color: #45abff;
  }
`;

export default Filter;
