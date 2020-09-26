import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../styles/Colors";
import { updatePageToView } from "../../actions";
import {
  BiChevronsLeft,
  BiChevronLeft,
  BiChevronRight,
  BiChevronsRight,
} from "react-icons/bi";
import { getPageNumber, getPages } from "../../reducers/FeedReducer.js";

const Pagination = () => {
  const dispatch = useDispatch();
  const pages = useSelector(getPages);
  const pageNumber = useSelector(getPageNumber);
  const displayPageNumber = pageNumber + 1;
  if (pages !== undefined && pages.length === 1) {
    return null;
  }
  return (
    <PaginationWrapper>
      {pages !== undefined && pages.length > 3 && pageNumber >= 2 ? (
        <ToFirstPage
          onClick={() => {
            dispatch(updatePageToView(0));
          }}
        >
          <BiChevronsLeft size={35} />
        </ToFirstPage>
      ) : null}
      {pageNumber === 0 ? null : (
        <>
          <Previous
            onClick={() => {
              dispatch(updatePageToView(pageNumber - 1));
            }}
          >
            <BiChevronLeft size={35} />
          </Previous>
          <PagePrevious
            onClick={() => {
              dispatch(updatePageToView(pageNumber - 1));
            }}
          >
            {displayPageNumber - 1}
          </PagePrevious>
        </>
      )}

      <PageActive>{displayPageNumber}</PageActive>
      {pages !== undefined && pageNumber + 1 > pages.length - 1 ? null : (
        <PageNext onClick={() => dispatch(updatePageToView(pageNumber + 1))}>
          {displayPageNumber + 1}
        </PageNext>
      )}

      {pages !== undefined &&
      pages.length > 3 &&
      pageNumber < pages.length - 2 ? (
        <>
          <Dots>. . .</Dots>
          <FinalPage
            onClick={() => dispatch(updatePageToView(pages.length - 1))}
          >
            {pages.length}
          </FinalPage>
        </>
      ) : null}
      {pages !== undefined && pageNumber + 1 > pages.length - 1 ? null : (
        <Next onClick={() => dispatch(updatePageToView(pageNumber + 1))}>
          <BiChevronRight size={35} />
        </Next>
      )}
      {pages !== undefined &&
      pages.length > 3 &&
      pageNumber < pages.length - 2 ? (
        <ToFinalPage
          onClick={() => dispatch(updatePageToView(pages.length - 1))}
        >
          <BiChevronsRight size={35} />
        </ToFinalPage>
      ) : null}
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  width: 100;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  color: ${COLORS.BLUE.SECONDARY};
`;

const ToFirstPage = styled.a`
  margin-right: 10px;
`;

const Previous = styled.a`
  margin-right: 5px;
`;

const Next = styled.a`
  margin-right: 5px;
`;

const PagePrevious = styled.a`
  margin-right: 5px;
`;

const PageActive = styled.a`
  background-color: ${COLORS.PURPLE.PRIMARY};
  margin-right: 5px;
  color: white;
  font-size: 1.1em;
  padding: 2px;
  border-radius: 3px;
  transform: translateY(-3px);
`;

const PageNext = styled.a`
  margin-right: 5px;
`;

const Dots = styled.span`
  margin-right: 5px;
`;

const FinalPage = styled.a`
  margin-right: 10px;
`;

const ToFinalPage = styled.a``;
export default Pagination;
