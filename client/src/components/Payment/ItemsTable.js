import React from "react";
import styled from "styled-components";
import { THEME } from "../Style/Theme";
import { Buttons } from '../Buttons';
import { useSelector, useDispatch } from "react-redux";
import { getStoreItemsArray, getTotal } from '../reducers/Purchase';
import { removeItem } from '../../Actions';

const ItemsTable = ({ onClick, id, addToCart, children }) => {
    const dispatch = useDispatch();
    const itemArray = useSelector(getStoreItemsArray);
    const subTotal = useSelector(getTotal);
    const cartQuantity = useSelector(state => state.purchase[id] ? state.purchase[id].quantity : 1);
    const [quantity, setQuantity] = React.useState(cartQuantity);

    return (
        <>
            <Header>
                Shopping Cart
            </Header>
            <Table>
                <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead></TableHead>
                </TableRow>
                {itemArray.map((item) => {
                    return (
                        <TableRow key={item.id}>
                            <TableDescription>{item.nameCapitalized}</TableDescription>
                            <TableDescription>

                                <Buttons id={id} onClick={() => setQuantity(item.quantity - 1 || 1)}>
                                    -
                            </Buttons>
                                <span>{item.quantity}</span>
                                <Buttons id={id} onClick={() => setQuantity(Math.min(item.quantity + 1))}>
                                    +
                            </Buttons>
                            </TableDescription>
                            <TableDescription>${item.price}</TableDescription>
                            <RemoveItemBtn onClick={() => dispatch(removeItem(item.id))}>
                                X
                            </RemoveItemBtn>
                        </TableRow>
                    )
                })}
            </Table>
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
        </>
    )
}

const Header = styled.h2`
    padding-bottom: 10px;
`

const Table = styled.table`
    width: 100%;
    text-align: center;
`
const TableHead = styled.th`
    text-transform: uppercase;
    color: ${THEME.primary};
    text-align: left;
`

const TableRow = styled.tr`
`

const TableDescription = styled.td`
`

const Total = styled.p`
    text-align: right;
`

const Span = styled.span`
    font-weight: 700;
    padding-left: 10px;
    font-size: 18px;
`

const RemoveItemBtn = styled.button`
    font-size: 15px;
    background: none;
    color: red;
    border: none;
    cursor: pointer;
`

const TextField = styled.input`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export default ItemsTable;