import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import ItemsTable from "./ItemsTable";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Actions";
import { ModalButton } from "../Buttons";
import { THEME } from "../Style/Theme";

const PaymentModal = ({ onClick }) => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

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
          <ModalButton
            onClick={(event) => {
              event.stopPropagation();
              dispatch(toggleModal());
            }}
          >
            CONTINUE SHOPPING
          </ModalButton>
          <ModalButton onClick={onClick}>Next</ModalButton>
        </DividerButtons>
      </Modal>
    </ModalWrapper>
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

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #aaa;
  background-color: rgba(50, 50, 50, 0.5);
  cursor: pointer;
  z-index: 999;
`;

const Modal = styled.div`
  width: 50%;
  min-width: 650px;
  margin: 0 auto;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  cursor: default;

  @media (max-width: ${THEME.mobile}) {
    width: 90%;
    min-width: 300px;
    padding: 10px;
  }
`;

const DividerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default PaymentModal;
