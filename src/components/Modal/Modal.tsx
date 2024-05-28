import { StyledModalContainer } from "./Modal.style";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <StyledModalContainer>{children}</StyledModalContainer>;
};

export default Modal;
