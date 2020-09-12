import React from 'react';
import styled from "styled-components/macro";
import { useSelector } from 'react-redux';

import QuantityBar from './QuantityBar';

const Product = () => {
    return (
        <>
            Product
            <QuantityBar />
        </>
    );
};

export default Product;
