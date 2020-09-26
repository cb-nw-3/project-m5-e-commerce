import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/Colors";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  requestItems,
  receiveItems,
  catchError,
  PaginateItems,
} from "../../actions";

import { getPages, getPageNumber } from "../../reducers/FeedReducer.js";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import FiveHundred from "../errrorPage/FiveHundred";
import { FilteredItemsByBody } from "../../filterHelpers";

export const Feed = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const data = useSelector((state) => {
    return state.feed;
  });

  const currentFilter = data.filter;
  const purchaseTracker = useSelector((state) => state.purchases.idOfLastOrder);
  const pages = useSelector(getPages);
  const pageNumber = useSelector(getPageNumber);

  const { status } = data;

  React.useEffect(() => {
    dispatch(requestItems());
    fetch("/bigData")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveItems(json));
        if (currentFilter !== null) {
          dispatch(
            PaginateItems(FilteredItemsByBody(currentFilter, json.items))
          );
          return;
        }
        dispatch(PaginateItems(json.items));
      })
      .catch((err) => {
        dispatch(catchError(err));
      });
  }, [purchaseTracker, dispatch, currentFilter]);

  if (status === "error") {
    return (
      <div>
        <FiveHundred />
      </div>
    );
  }

  if (!data.pages || status === "loading") {
    return (
      <div style={{ marginTop: "50px" }}>
        {/* Loading Style */}
        <Loader
          type="Grid"
          color={COLORS.BLUE.PRIMARY}
          m
          height={80}
          width={80}
        />
      </div>
    );
  }
  if (data.pages !== undefined) {
    return pages[pageNumber].map((item, index) => {
      return (
        <div key={item.name + index}>
          <ItemWrapper
            onClick={(ev) => {
              ev.stopPropagation();
              history.push(`/items/${item._id}`);
            }}
          >
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
            <div>
              {item.numInStock > 0 ? (
                <Img src={item.imageSrc} />
              ) : (
                <Img
                  src={item.imageSrc}
                  style={{ filter: "grayscale(100%)" }}
                />
              )}
            </div>
            <div>
              <Location>{item.body_location} - </Location>
              <Category>{item.category}</Category>
            </div>
            <StockCont>
              <Stock>
                {/* If Stock is 0, it will simply display 'Out Of Stock */}
                {item.numInStock > 0
                  ? `${item.numInStock} Left in Stock`
                  : "Out of Stock!"}
              </Stock>
              {/* Add to cart button wont display if out off stock */}
            </StockCont>

            {item.numInStock > 0 ? (
              <Button
                onClick={(ev) => {
                  ev.stopPropagation();
                  dispatch(addItem(item));
                }}
              >
                {" "}
                Add To Cart{" "}
              </Button>
            ) : null}
          </ItemWrapper>
        </div>
      );
    });
  }
};

const ItemWrapper = styled.li`
  margin-top: 15px;
  border-top: 1px solid ${COLORS.BLUE.PRIMARY};
  @media (min-width: 800px) {
    border: 1px solid skyblue;
    border-radius: 10px;
    padding: 5px;
  }
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  font-weight: bold;
  margin-top: 10px;
  margin-top: 8px;
`;

const Price = styled.p`
  font-weight: bold;
  color: ${COLORS.BLUE.PRIMARY};
`;

const Location = styled.span`
  color: ${COLORS.BLUE.PRIMARY};
`;

const Img = styled.img`
  border-radius: 15px;
  height: 155px;
  margin: 5px;
`;

const Category = styled.span`
  color: ${COLORS.BLUE.PRIMARY};
`;

const StockCont = styled.div`
  display: flex;
  flex-direction: row;
  color: ${COLORS.BLUE.PRIMARY};
  align-items: center;
  justify-content: center;
`;

const Stock = styled.p`
  font-style: italic;
  margin: 2px;
`;

const Button = styled.button`
  border-radius: 15%;
  border: 1px solid ${COLORS.BLUE.PRIMARY};
  background-color: ${COLORS.PURPLE.SECONDARY};
  color: #fff;
  font-size: 15px;
  padding: 3px 10px;
  max-width: 150px;
`;
