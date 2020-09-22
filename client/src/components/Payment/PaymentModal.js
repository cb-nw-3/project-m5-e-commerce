import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import ItemsTable from "./ItemsTable";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Actions";
import { getStoreItemsArray, getTotal } from '../reducers/Purchase';
import { ModalButton } from "../Buttons";

const PaymentModal = ({ onClick }) => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const itemArray = useSelector(getStoreItemsArray);
  const subTotal = useSelector(getTotal);

  console.log("cart Payment", itemArray)
  console.log("Total Payment", subTotal)
  return (
    <ModalWrapper onClick={(event) => dispatch(toggleModal())}>
      <Modal
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <ModalHeader>
          <IconBtn
            onClick={(event) => {
              event.stopPropagation();
              dispatch(toggleModal());
            }}
          >
            <CloseIcon />
          </IconBtn>
        </ModalHeader>
        <ItemsTable />
        <DividerButtons>
          <ModalButton onClick={(event) => {
            event.stopPropagation();
            dispatch(toggleModal());
          }}>
            Continue Shopping
          </ModalButton>
          <ModalButton onClick={onClick}>
            Purchase
          </ModalButton>
        </DividerButtons>

      </Modal>
    </ModalWrapper >
  );
};

const IconBtn = styled.a`
  border: none;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ModalWrapper = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #aaa;
  background-color: rgba(50, 50, 50, 0.5);
  cursor: pointer;
`;

const Modal = styled.div`
  width: 500px;
  border: 1px solid grey;
  margin: 0 auto;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  cursor: default;
`;

const DividerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default PaymentModal;
