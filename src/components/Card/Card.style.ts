import styled from "styled-components";

export const StyledCard = styled.section`
  background: ${(props) => props.theme.body};
  margin: 2rem 10px;
  color: ${(props) => props.theme.color};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%;
`;
