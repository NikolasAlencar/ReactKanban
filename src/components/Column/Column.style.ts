import styled from "styled-components";

export const StyledColumn = styled.div`
  padding: 12px;
  border: 1px solid #00000014;
  border-radius: 4px;
  margin-bottom: auto;
`;

export const StyledContainer = styled.div`
  border-top: 1px solid #3333332e;
  border-bottom: 1px solid #3333331f;
  padding: 8px;
  margin: 8px;
`;

export const StyledTitle = styled.p`
  font-size: 18px;
  font-family: "Comic Sans MS";
`;

export const StyledSpan = styled(StyledTitle).attrs({ as: "span" })`
  font-size: 24px;
  font-family: "Comic Sans MS";
  cursor: pointer;
  margin-left: 8px;
`;
