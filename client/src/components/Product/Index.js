import React from 'react';
import styled from "styled-components/macro";
import { useSelector } from 'react-redux';
import PaymentModal from '../Product/PaymentModal';

import QuantityBar from './QuantityBar';

const Product = () => {
    return (
        <>
            <QuantityBar />
            <PaymentModal />
        </>
    );
};

export default Product;
