import React, {useEffect} from "react";
import styled from "styled-components";
import Item from "./Item";
import { useSelector } from "react-redux";

const ItemList = () => {
  const itemsList = useSelector((state) => state.itemList.items);

  return (
    <Wrapper>
      <ListWrapper>
        {itemsList &&
          (itemsList.map((items, index) => {
            return (<Row key={index}>
                  {items.map(item => <Item key={item._id} item={item}/>)}
            </Row>)
          }))}
      </ListWrapper>
      <ListFooter>
        <a>View more...</a>
      </ListFooter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ListFooter = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 30px;
`;

export default ItemList;
