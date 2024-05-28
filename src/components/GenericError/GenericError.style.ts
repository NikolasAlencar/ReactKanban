import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  margin: auto;
`;

export const Icon = styled.div`
  font-size: 48px;
  color: #f44336;
`;

export const Label = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: #333;
`;

export const Button = styled.button`
  background: #ffe57f;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-family: "Comic Sans MS";
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #ffe57f;
  }
`;
