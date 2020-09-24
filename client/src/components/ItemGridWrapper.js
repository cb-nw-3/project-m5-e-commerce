import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "./Button";
import Pagination from "./Pagination";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../actions/actions";
import { updateQuantity, decrementQty } from "../actions/actions";

const ItemGridWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    fetch("/items")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "RECEIVE_ITEMS",
          items: data,
        })
      );
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const items = useSelector((state) => state.items.items);
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const dispatch = useDispatch();

  //change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Wrapper>
        {currentItems.map((item) => (
          <div key={item._id}>
            <ItemWrapper>
              <Title> {item.name}</Title>
              <ImageWrapper>
                <img
                  src={`${item.imageSrc}`}
                  alt={`${item.name}`}
                  width="150"
                  height="150"
                />
              </ImageWrapper>
              <div>{item.description}</div>
              <PriceWrapper>{item.price}</PriceWrapper>

              <Quantity>Quantity:{item.numInStock}</Quantity>

              <Button
                onClick={() => {
                  dispatch(
                    addItem(
                      item._id
                      // name: item.name,
                      // price: item.price,
                      // id: item._id,
                    )
                  );
                  dispatch(decrementQty(item._id));
                }}
              >
                Add To Cart
              </Button>
            </ItemWrapper>
          </div>
        ))}
      </Wrapper>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  font-family: "Titillium Web", sans-serif;
  grid-area: main;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

const ItemWrapper = styled.article`
  padding: 16px;
  font-family: "Titillium Web", sans-serif;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  font-family: "Titillium Web", sans-serif;
  border-radius: 12px;
  border: 3px solid rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  display: block;
  font-family: "Titillium Web", sans-serif;
  max-width: 100%;
  transition: transform 400ms;
  transform-origin: center center;
  &:hover {
    transform: scale(1.25) rotate(10deg);
  }
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Titillium Web", sans-serif;
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 18px;
  font-weight: 600;
`;

const PriceWrapper = styled.div`
  font-weight: bold;
  font-family: "Titillium Web", sans-serif;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  font-family: "Titillium Web", sans-serif;
  border-left: 3px #ff406e;
  padding-left: 0px;
  height: 100vh;
`;

const Quantity = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

export default ItemGridWrapper;
