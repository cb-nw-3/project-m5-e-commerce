import React from 'react';
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import PaymentModal from '../Product/PaymentModal';
import Image from './Image';
import BreadCrumbs from './BreadCrumbs';

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

    let category = item.category.toUpperCase();

    console.log(category);
    return (
        <>
            <BreadCrumbs>
                {category}
            </BreadCrumbs>
            <Image itemSrc={item.imageSrc} />
            <QuantityBar />
            <PaymentModal />
        </>
    );
};

export default Product;
