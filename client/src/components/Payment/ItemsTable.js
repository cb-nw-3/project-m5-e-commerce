import React from "react";
import styled from "styled-components";
import { THEME } from "../Style/Theme";

const ItemsTable = ({ onClick, children }) => {
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
                <TableRow>
                    <TableDescription></TableDescription>
                    <TableDescription></TableDescription>
                    <TableDescription></TableDescription>
                    <TableDescription></TableDescription>
                </TableRow>
            </Table>
            <Total>
                Total Cost: <Span>$11,00</Span>
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

const TextField = styled.input`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export default ItemsTable;