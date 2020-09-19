import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const PaymentModal = () => {
  return (
    <ModalWrapper>
      <Modal>
        <ModalHeader>
          <CloseIcon />
        </ModalHeader>
        MODAL CONTENT GOES HERE
      </Modal>
    </ModalWrapper>
  );
};

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
  background-color: rgba(170, 170, 170, 0.5);
  cursor: pointer;
`;

const Modal = styled.div`
  width: 400px;
  border: 1px solid grey;
  margin: 0 auto;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
`;

export default PaymentModal;
