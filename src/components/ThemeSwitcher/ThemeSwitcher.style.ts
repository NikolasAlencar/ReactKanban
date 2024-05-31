import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 60px;
  margin: 0 auto;
  padding: 0.5rem;
  position: fixed;
  top: 10px;
  right: 10px;

  &:focus {
    outline: none;
  }
`;

export const ToggleBall = styled.div<{ isDark: boolean }>`
  background: ${({ theme }) => theme.color};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: absolute;
  left: ${({ isDark }) => (isDark ? "35px" : "5px")};
  transition: all 0.25s linear;
`;

export const StyledEmote = styled.span`
  
`
