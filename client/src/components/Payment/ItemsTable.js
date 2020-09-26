import React from "react";
import styled from "styled-components";
import { THEME } from "../Style/Theme";
import { Buttons } from "../ModalQuantityButtons";
import { useSelector, useDispatch } from "react-redux";
import { getStoreItemsArray, getTotal } from "../reducers/Purchase";
import { removeItem } from "../../Actions";

const ItemsTable = ({
  onClick,
  id,
  addToCart,
  children,
  itemSrc,
  numInStock,
}) => {
  const dispatch = useDispatch();
  const itemArray = useSelector(getStoreItemsArray);
  const subTotal = useSelector(getTotal);
  const cartQuantity = useSelector((state) =>
    state.purchase[id] ? state.purchase[id].quantity : 1
  );
  const [quantity, setQuantity] = React.useState(cartQuantity);

  return (
    <>
      <Table>
        <Title>SHOPPING CART</Title>
        <Heading>
          <Cell>Product</Cell>
          <Cell></Cell>
          <Cell>Amount</Cell>
          <Cell>Price</Cell>
          <Cell></Cell>
        </Heading>
        <ProductRow>
          {itemArray.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableDescription>
                  <ItemImage src={itemSrc} />
                </TableDescription>
                <TableDescription>{item.nameCapitalized}</TableDescription>
                <TableDescription>
                  <QuantityWrapper>
                    <Buttons
                      id={id}
                      numInStock={numInStock}
                      onClick={() => setQuantity(quantity - 1 || 1)}
                    >
                      <strong>-</strong>
                    </Buttons>
                    <span>{item.quantity}</span>
                    <Buttons
                      id={id}
                      numInStock={numInStock}
                      onClick={() => setQuantity(Math.min(quantity + 1))}
                    >
                      <strong>+</strong>
                    </Buttons>
                  </QuantityWrapper>
                </TableDescription>
                <TableDescription>${item.price}</TableDescription>
                <RemoveItemBtn onClick={() => dispatch(removeItem(item.id))}>
                  X
                </RemoveItemBtn>
              </TableRow>
            );
          })}
        </ProductRow>
        <Total>
          Total Cost: <Span>${subTotal}</Span>
        </Total>
        <TextField
          autoFocus
          margin="dense"
          id="card"
          label="Credit Card"
          type="number"
        />
        <TextField
          margin="dense"
          id="expiration"
          label="Expiration"
          type="number"
        />
        {children}
      </Table>
    </>
  );
};

const Title = styled.h2`
  padding-bottom: 50px;
  display: table-caption;
  text-align: center;
  font-weight: bold;
  font-size: larger;
`;

const ItemImage = styled.img`
  border-radius: 25%;
`;

const Heading = styled.div`
  display: table-row;
  font-weight: bold;
  text-align: center;
`;

const Cell = styled.div`
  display: table-cell;
  border: solid;
  border-width: thin;
  padding-left: 5px;
  padding-right: 5px;
`;

const ProductRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const TableDescription = styled.div`
  font-size: 14px;
  text-align: left;
`;

const QuantityWrapper = styled.div`
  border: 1px solid black;
  background-color: white;
  border: none;
  padding: 0;
`;

const Table = styled.div`
  padding: 10px;
  display: table;
`;

const Total = styled.p`
  text-align: right;
  padding: 15px 0 15px 0;
`;

const Span = styled.span`
  font-weight: 700;
  padding-left: 10px;
  font-size: 18px;
`;

const RemoveItemBtn = styled.button`
  font-size: 15px;
  margin-top: 2px;
  font-weight: bold;
  background: none;
  color: red;
  border: none;
  cursor: pointer;
`;

const TextField = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default ItemsTable;
