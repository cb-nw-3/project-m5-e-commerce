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

    const toTitleCase = (phrase) => {
        return phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    let name = item.name;
    let nameCapitalized = toTitleCase(name);

    console.log(category);
    return (
        <Wrapper>
            <Image itemSrc={item.imageSrc} />
            <ItemDetails>
                <BreadCrumbs>
                    {category}
                </BreadCrumbs>
                <Paragraph>
                    {nameCapitalized}
                </Paragraph>
                {item.price}
                <QuantityBar />
                <PaymentModal />
            </ItemDetails>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    margin: 40px;
`

const Paragraph = styled.p`

`

const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px; 
`
export default Product;
