import styled from "styled-components";
import { StyledSpan } from "../Column/Column.style";

export const StyledModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  background: #0000008c;
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const CloseModal = styled(StyledSpan)`
  position: absolute;
  top: 0px;
  right: 10px;
`;
