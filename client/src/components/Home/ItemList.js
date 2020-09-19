import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ItemList = () => {
  return (
    <ListWrapper>
      <Row>
        <Col>
          <Item />
        </Col>
        <Col>
          <Item />
        </Col>
        <Col>
          <Item />
        </Col>
        <Col>
          <Item />
        </Col>
      </Row>
      <Row>
        <Col>
          <Item />
        </Col>
        <Col>
          <Item />
        </Col>
        <Col>
          <Item />
        </Col>
        <Col>
          <Item />
        </Col>
      </Row>
    </ListWrapper>
  );
};

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

const Col = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export default ItemList;
