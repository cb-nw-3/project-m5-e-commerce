import React from 'react';
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import PaymentModal from '../Product/PaymentModal';
import Image from './Image';
import BreadCrumbs from './BreadCrumbs';
import { THEME } from '../Style/Theme';
import QuantityBar from './QuantityBar';
import Tag from './Tag';
import Company from './Company';
import Sku from './Sku';


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

    return (
        <Wrapper>
            <BreadCrumbs device="mobile">
                {category}
            </BreadCrumbs>
            <Image itemSrc={item.imageSrc} />
            <ItemDetails>
                <BreadCrumbs device="desktop">
                    {category}
                </BreadCrumbs>
                <Tag >
                    {item.numInStock ? 'IN STOCK' : 'OUT OF STOCK'}
                </Tag>
                <div>
                    <Paragraph>
                        {nameCapitalized}
                    </Paragraph>
                    <Paragraph>
                        {item.price}
                    </Paragraph>
                    <Company src={item.company.url}>
                        {item.company.name}
                    </Company>
                    <Sku>
                        SKU: {item._id}
                    </Sku>
                </div>
                <QuantityBar />
                <PaymentModal />
            </ItemDetails>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: block;

    @media (min-width:${THEME.mobile}){
        display: flex;
        margin: 40px;
    }
`

const Paragraph = styled.p`
    font-size: 20px;

    @media (max-width:${THEME.mobile}){
        margin-top: 10px;
    }
`

const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 30px; 

    @media (max-width: ${THEME.mobile}){
        margin-top: 10px;
        padding: 0 20px; 
    }
`
export default Product;
