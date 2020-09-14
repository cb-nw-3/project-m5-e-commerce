import React from "react";
import styled from "styled-components";

const Pagination = ({ itemsPerPage, totalItems }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pages = styled.li`
  list-style-type: none;
  display: inline-block;
`;

export default Pagination;
