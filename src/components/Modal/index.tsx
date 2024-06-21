import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  overflow-x: hidden;

  opacity: 0;  /* Inicialmente invisível */

  &.fade-in {
    animation: fadeIn 0.3s forwards;
  }

  &.fade-out {
    animation: fadeOut 0.3s forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin-top: 10px;
`;

interface ModalProps {
    show: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal = ({ show, onClose, children }:ModalProps) => {
  if (!show) return null;

  return (
    <Overlay>
      <ModalContainer className={show?'fade-in': 'fade-out'}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

