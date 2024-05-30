import styled from "styled-components";
import { StyledContainer, StyledTitle } from "../Column/Column.style";
import { ReactComponent as People } from "../../assets/people.svg";

interface StyledPriorityProps {
  priority: "medium" | "high" | "low";
}

export const Container = styled(StyledContainer)`
  border: 1px solid #00000017;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgb(255 0 0 / 20%);
  min-width: 160px;
`;

export const StyledP = styled(StyledTitle)`
  font-size: 14px;
  margin: 8px 0px;
`;

export const StyledSvg = styled(People)`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

export const StyledPriority = styled(StyledP).attrs<StyledPriorityProps>({
  as: "span",
})`
  background: ${({ priority }) => {
    switch (priority) {
      case "high":
        return "#ff5555";
      case "medium":
        return "#ffff89";
      case "low":
        return "#58bd58";
      default:
        return "white";
    }
  }};
  border-radius: 4px;
  padding: 4px;
  margin-left: 8px;
`;
