import { StyledModalContainer } from "./Modal.style";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <StyledModalContainer>{children}</StyledModalContainer>;
};

export default Modal;
