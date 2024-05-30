import styled from "styled-components";
import { ReactComponent as House } from "../../assets/house.svg";

export const StyledHeader = styled.header`
  background: ${(props) => props.theme.body};
  margin: 10px;
  max-width: 220px;
  color: ${(props) => props.theme.color};
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledSvg = styled(House)`
  height: 16px;
  width: 16px;
  margin-right: 8px;
  cursor: pointer;
`;
