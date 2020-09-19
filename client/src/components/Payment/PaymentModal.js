import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Actions";

const PaymentModal = () => {
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
        MODAL CONTENT GOES HERE
      </Modal>
    </ModalWrapper>
  );
};

const IconBtn = styled.a`
  border: none;
  background-color: transparent;
  text-decoraqtion: none;
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
  width: 400px;
  border: 1px solid grey;
  margin: 0 auto;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  cursor: default;
`;

export default PaymentModal;
