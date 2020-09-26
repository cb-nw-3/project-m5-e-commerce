import React from "react";
import styled from "styled-components";
import { Buttons } from "../ModalQuantityButtons";
import { useSelector, useDispatch } from "react-redux";
import { getStoreItemsArray, getTotal } from "../reducers/Purchase";
import { increment, decrement, removeItem } from "../../Actions";
import { THEME } from "../Style/Theme";


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
    const total = subTotal.toFixed(2);

    const cartQuantity = useSelector((state) =>
        state.purchase[id] ? state.purchase[id].quantity : 1
    );
    const [quantity, setQuantity] = React.useState(cartQuantity);

    return (
        <>
            <Wrapper>
                <Table>
                    <Title>SHOPPING CART</Title>
                    <Heading>
                        <Cell>Product</Cell>
                        <Cell></Cell>
                        <Cell>Amount</Cell>
                        <Cell>Price</Cell>
                        <Cell></Cell>
                    </Heading>
                    {itemArray.map((item) => {
                        return (
                            <Row key={item.id}>
                                <Cell>
                                    <ItemImage src={item.image} />
                                </Cell>
                                <Cell>{item.nameCapitalized}</Cell>
                                <Cell>
                                    <QuantityWrapper>
                                        <Buttons
                                            id={id}
                                            numInStock={numInStock}
                                            onClick={() => dispatch(decrement(item.id))}
                                        >
                                            <Text>
                                                <strong>-</strong>
                                            </Text>
                                        </Buttons>
                                        <span>{item.quantity}</span>
                                        <Buttons
                                            id={id}
                                            numInStock={numInStock}
                                            onClick={() => dispatch(increment(item.id))}
                                        >
                                            <Text>
                                                <strong>+</strong>
                                            </Text>
                                        </Buttons>
                                    </QuantityWrapper>
                                </Cell>
                                <Cell>${item.price}</Cell>
                                <Cell>
                                    <RemoveItemBtn onClick={() => dispatch(removeItem(item.id))}>
                                        X
                      </RemoveItemBtn>
                                </Cell>
                            </Row>
                        );
                    })}
                </Table>
                <Total>
                    Total Cost: <Span>${total}</Span>
                </Total>
                {children}
            </Wrapper>
        </>
    );
};

const Text = styled.p`
  margin-bottom: 10px;

  @media (max-width: ${THEME.mobile}) {
    font-size: 12px;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  border-radius: 70%;

  @media (max-width: ${THEME.mobile}) {
    width: 30px;
    border-radius: 70%;
  }
`;

const Heading = styled.div`
  display: table-row;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

const Cell = styled.div`
  text-align: left;
  vertical-align: middle;
  align-items: center;
  display: table-cell;
  border: none;
  padding: 10px;

  @media (max-width: ${THEME.mobile}) {
    font-size: 10px;
    padding: 5px;
  }
`;

const Row = styled.div`
  display: table-row;
  text-align: center;
`;

const QuantityWrapper = styled.div`
  border: 1px solid black;
  background-color: white;
  min-width: 125px;
  border: none;
  text-align: left;
  position: relative;
  @media (max-width: ${THEME.mobile}) {
    min-width: 100px;
  }
`;

const Table = styled.div`
  display: table;
  min-width: 300px;

  @media (max-width: ${THEME.mobile}) {
    min-width: 200px;
  }
`;

const Title = styled.h2`
  padding-bottom: 40px;
  display: table-caption;
  text-align: center;
  font-weight: bold;
  font-size: larger;
`;

const Total = styled.p`
  text-align: right;
  padding: 15px 20px 15px 0;

  @media (max-width: ${THEME.mobile}) {
    font-size: 14px;
    padding: 10px 5px 10px 0;
  }
`;

const Span = styled.span`
  font-weight: 700;
  padding-left: 10px;
  font-size: 18px;
  @media (max-width: ${THEME.mobile}) {
    font-size: 14px;
    padding: 10px 5px 10px 0;
  }
`;

const RemoveItemBtn = styled.button`
  font-size: 15px;
  font-weight: bold;
  background: none;
  color: red;
  border: none;
  cursor: pointer;

  @media (max-width: ${THEME.mobile}) {
    font-size: 10px;
  }
`;

const Wrapper = styled.div`
  display: table;
  min-width: 500px;
  @media (max-width: ${THEME.mobile}) {
    min-width: 200px;
  }
`;

export default ItemsTable;
