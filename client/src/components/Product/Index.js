import React from 'react';
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import PaymentModal from '../Product/PaymentModal';
import Image from './Image';

import QuantityBar from './QuantityBar';

const Product = () => {
    const { id } = useParams();

    const [item, setItem] = React.useState();
    const [loading, setLoading] = React.useState(true);


    const fetchProduct = async () => {
        try {
            const response = await fetch(`/api/item/${id}`);
            const data = await response.json();
            setItem(data);
            setLoading(false);
        } catch (err) {
            console.log('Error product message', err);
        }
    };
    console.log(item);
    React.useEffect(() => {
        fetchProduct();
    }, []);
    if (loading) {
        return loading
    }
    return (
        <>
            <Image itemSrc={item.imageSrc} />
            <QuantityBar />
            <PaymentModal />
        </>
    );
};

export default Product;
