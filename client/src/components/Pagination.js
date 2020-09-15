import React from "react";
import styled from "styled-components";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <PaginationWrapper>
        {pageNumbers.map((number) => (
          <Pages key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </Pages>
        ))}
      </PaginationWrapper>
    </div>
  );
};

const Pages = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 20px;
`;

const PaginationWrapper = styled.ul`
  width: 100vw;
  font-family: "Titillium Web", sans-serif;
  font-size: 24px;
  text-align: left;
`;

export default Pagination;
