import {
  CloseModal,
  RelativeContainer,
  StyledModalContainer,
} from "./Modal.style";

interface ModalProps {
  children: React.ReactNode;
  setHandleModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, setHandleModal }: ModalProps) => {
  return (
    <StyledModalContainer>
      <RelativeContainer>
        {setHandleModal && (
          <CloseModal onClick={() => setHandleModal(false)}>x</CloseModal>
        )}
        {children}
      </RelativeContainer>
    </StyledModalContainer>
  );
};

export default Modal;
